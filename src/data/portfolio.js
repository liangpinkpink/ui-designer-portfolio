export const portfolio = {
  identity: {
    name: 'Shiqi Visual Lab',
    logo: 'SHIQI.'
  },
  nav: [
    { label: '履历', href: '#resume' },
    { label: '作品', href: '#projects' },
    { label: '能力', href: '#skills' },
    { label: '联系', href: '#contact' }
  ],
  hero: {
    kicker: 'UI Designer / Brand & Product Experience',
    titleTop: 'SHIQI',
    titleBottom: 'Portfolio',
    description: '专注高质感数字界面、品牌视觉系统与商业化活动体验，用清晰的结构和克制的视觉情绪，把概念转化为可落地的用户体验。',
    metric: '28+ CASES',
    note: '品牌官网 / APP界面 / 活动专题 / 3D视觉 / 设计系统'
  },
  profile: {
    summary: '我是一名偏综合型的 UI 设计师，擅长在复杂需求中建立视觉秩序。过往项目覆盖互联网产品、品牌官网、营销活动、电商专题和概念视觉包装，能够独立完成从风格探索、界面设计、动效表达、规范沉淀到开发协作的完整流程。',
    timeline: [
      { period: '2021 - 2023', role: '视觉与运营设计师', detail: '负责大型活动专题、品牌物料、社媒内容与商业视觉延展，建立高效率设计资产库。' },
      { period: '2023 - 2025', role: 'UI / UX Designer', detail: '参与 B 端工具、移动端产品与官网项目，输出用户流程、界面方案、组件规范和交互动效。' },
      { period: '2025 - Now', role: '独立设计协作', detail: '为初创团队和品牌项目提供产品界面、视觉定位、作品集包装与落地交付支持。' }
    ],
    services: [
      { title: '商业方向', description: '官网、活动专题、电商视觉、品牌传播页面。' },
      { title: '产品方向', description: 'APP、Web后台、设计系统、交互原型。' },
      { title: '视觉方向', description: '3D风格探索、KV延展、动态视觉、图形语言。' }
    ]
  },
  projects: [
    { title: 'BOE Future Display', category: '品牌官网', description: '科技品牌官网首页与视觉体系探索。', cover: '/assets/placeholders/project-01.svg', link: '#contact', mediaType: 'image', size: 'wide' },
    { title: 'WPS Cloud Studio', category: '产品界面', description: '云端协作工具的仪表盘与组件规范。', cover: '/assets/placeholders/project-02.svg', link: '#contact', mediaType: 'image' },
    { title: 'Island Pop-up Store', category: '活动专题', description: '潮玩品牌新品发布与互动专题页面。', cover: '/assets/placeholders/project-03.svg', link: '#contact', mediaType: 'video' },
    { title: 'CUBA Data Center', category: '数据大屏', description: '赛事数据中心视觉框架与动效布局。', cover: '/assets/placeholders/project-04.svg', link: '#contact', mediaType: 'image' },
    { title: 'Enclosure Initiative', category: '概念包装', description: '空间叙事类概念项目与视觉设定。', cover: '/assets/placeholders/project-05.svg', link: '#contact', mediaType: 'image', size: 'wide' },
    { title: 'Angel Character UI', category: '3D视觉', description: '角色视觉、色彩氛围与落地界面应用。', cover: '/assets/placeholders/project-06.svg', link: '#contact', mediaType: 'video' }
  ],
  skills: [
    { title: '产品界面设计', description: '梳理用户路径、信息层级、状态反馈和多端布局，输出可协作的界面方案。', level: '95%' },
    { title: '品牌视觉系统', description: '建立色彩、字体、图形、版式与延展规则，让页面具备统一而清晰的识别度。', level: '92%' },
    { title: '动态与交互表达', description: '通过滚动、悬停、转场与微动效增强节奏感，同时保持页面易读和稳定。', level: '88%' },
    { title: '交付与协作', description: '沉淀组件规范、切图资源和开发说明，减少还原成本，提升项目推进效率。', level: '90%' }
  ],
  tools: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Spline', 'Cinema 4D', 'Principle', 'Framer', 'HTML/CSS'],
  contact: {
    signature: 'Design with structure, emotion and delivery.',
    channels: [
      { label: 'Email', value: 'hello@portfolio.design', note: '用于商务合作、项目咨询与简历投递。', qr: '/assets/placeholders/qr-email.svg' },
      { label: 'WeChat', value: 'ui-designer-demo', note: '后续可替换为你的真实微信二维码。', qr: '/assets/placeholders/qr-wechat.svg' },
      { label: 'Behance', value: 'behance.net/demo', note: '预留海外作品平台链接展示入口。', qr: '/assets/placeholders/qr-behance.svg' },
      { label: 'Xiaohongshu', value: '@视觉作品集', note: '适合放置个人内容账号或作品更新。', qr: '/assets/placeholders/qr-social.svg' }
    ]
  }
};
