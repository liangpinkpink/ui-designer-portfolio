import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, MessageCircle, Palette, Play, Sparkle, Layers3, WandSparkles } from 'lucide-react';
import { portfolio } from './data/portfolio';
import './styles.css';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progress;
}

function MotionField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let raf = 0;
    let particles = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(36, Math.floor(width / 28));
      particles = Array.from({ length: count }, (_, index) => ({
        x: (index * 97) % Math.max(width, 1),
        y: (index * 53) % Math.max(height, 1),
        speed: 0.15 + (index % 7) * 0.035,
        size: 1 + (index % 5) * 0.35,
        phase: index * 0.7
      }));
    };

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      particles.forEach((particle, index) => {
        particle.x += particle.speed;
        particle.y += Math.sin(time * 0.001 + particle.phase) * 0.08;
        if (particle.x > width + 20) particle.x = -20;
        const alpha = 0.12 + Math.sin(time * 0.0015 + index) * 0.08;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 111, 0, ${alpha})`;
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(render);
    };

    resize();
    raf = requestAnimationFrame(render);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="motion-field" aria-hidden="true" />;
}

function SectionTitle({ eyebrow, title, muted, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {muted ? <p>{muted}</p> : null}
    </div>
  );
}

function Hero({ progress }) {
  const style = {
    '--hero-shift': `${progress * 80}px`,
    '--hero-float': `${progress * -140}px`
  };

  return (
    <section className="hero section" id="top" style={style}>
      <MotionField />
      <div className="hero__shade" />
      <div className="hero__grid" />
      <div className="hero__mark hero__mark--left">PORTFOLIO</div>
      <div className="hero__mark hero__mark--right">UI/UX</div>
      <div className="container hero__inner">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top">{portfolio.identity.logo}</a>
          <div className="nav__links">
            {portfolio.nav.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </nav>

        <div className="hero__content">
          <p className="hero__kicker">{portfolio.hero.kicker}</p>
          <h1>
            <span>{portfolio.hero.titleTop}</span>
            <strong>{portfolio.hero.titleBottom}</strong>
          </h1>
          <p className="hero__intro">{portfolio.hero.description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              <span>查看作品</span>
              <ArrowUpRight size={18} />
            </a>
            <a className="button button--ghost" href="#contact">
              <Mail size={18} />
              <span>联系合作</span>
            </a>
          </div>
        </div>

        <div className="hero__side" aria-label="作品集摘要">
          <span>SELECTED WORKS</span>
          <strong>{portfolio.hero.metric}</strong>
          <p>{portfolio.hero.note}</p>
        </div>

        <div className="hero__stage" aria-hidden="true">
          <div className="stage-card stage-card--main">
            <span>LIVE CASE</span>
            <strong>Design System 3.0</strong>
            <i />
          </div>
          <div className="stage-card stage-card--panel">
            <span>Motion</span>
            <strong>Scroll / Hover / Reveal</strong>
          </div>
          <div className="stage-card stage-card--mini">
            <span>UI</span>
            <strong>96%</strong>
          </div>
          <div className="stage-orbit stage-orbit--one" />
          <div className="stage-orbit stage-orbit--two" />
          <div className="stage-chip stage-chip--one">Figma</div>
          <div className="stage-chip stage-chip--two">3D</div>
          <div className="stage-chip stage-chip--three">Brand</div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="section resume" id="resume">
      <div className="container split-layout">
        <SectionTitle
          eyebrow="Profile"
          title="个人履历介绍"
          muted="围绕品牌表达、产品体验与商业转化，提供从策略到界面落地的一体化设计支持。"
        />
        <div className="resume__panel">
          <p className="lead">{portfolio.profile.summary}</p>
          <div className="timeline">
            {portfolio.profile.timeline.map((item) => (
              <article key={item.period} className="timeline__item">
                <span>{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="container service-grid">
        {portfolio.profile.services.map((service, index) => (
          <article className="service-card" key={service.title} style={{ '--delay': `${index * 70}ms` }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card--${project.size || 'normal'}`} style={{ '--delay': `${index * 60}ms` }}>
      <a href={project.link} aria-label={`查看${project.title}`}>
        <figure>
          <img src={project.cover} alt={project.title} />
          {project.mediaType === 'video' ? <span className="media-pill"><Play size={14} fill="currentColor" />VIDEO</span> : null}
        </figure>
        <div className="project-card__body">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <span className="project-card__tag">{project.category}</span>
        </div>
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__heading">
          <SectionTitle
            eyebrow="Selected Projects"
            title="项目作品展示"
            muted="图片、视频封面与项目介绍均可在数据文件中快速替换，适合持续扩展真实作品。"
          />
          <span className="watermark">WORKS</span>
        </div>
        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const IconList = [Palette, Layers3, WandSparkles, Sparkle];
  return (
    <section className="section skills" id="skills">
      <div className="container split-layout split-layout--skills">
        <SectionTitle
          eyebrow="Capability"
          title="个人能力总结"
          muted="以视觉判断力为核心，将产品结构、品牌系统、动效表现和交付效率组合成稳定的设计生产力。"
        />
        <div className="skill-list">
          {portfolio.skills.map((skill, index) => {
            const Icon = IconList[index % IconList.length];
            return (
              <article className="skill-item" key={skill.title}>
                <div className="skill-item__icon"><Icon size={22} /></div>
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
                <strong>{skill.level}</strong>
              </article>
            );
          })}
        </div>
      </div>
      <div className="container tool-row" aria-label="工具与能力标签">
        {portfolio.tools.map((tool) => <span key={tool}>{tool}</span>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <SectionTitle
            eyebrow="Contact Information"
            title="联系方式"
            muted="欢迎讨论品牌官网、产品界面、运营视觉、作品集包装与长期设计协作。"
          />
          <p className="signature">{portfolio.contact.signature}</p>
        </div>
        <div className="contact-grid">
          {portfolio.contact.channels.map((channel) => (
            <article className="contact-card" key={channel.label}>
              <div className="contact-card__avatar"><MessageCircle size={18} /></div>
              <div>
                <span>{channel.label}</span>
                <h3>{channel.value}</h3>
                <p>{channel.note}</p>
              </div>
              <img src={channel.qr} alt={`${channel.label}二维码占位`} />
            </article>
          ))}
        </div>
      </div>
      <footer className="footer container">
        <span>{portfolio.identity.name} Portfolio</span>
        <a href="#top">Back to top</a>
      </footer>
    </section>
  );
}

function App() {
  const progress = useScrollProgress();
  const navStyle = useMemo(() => ({ '--scroll-progress': progress }), [progress]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.project-card'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.22 });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={navStyle}>
      <div className="progress-line" />
      <Hero progress={progress} />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
