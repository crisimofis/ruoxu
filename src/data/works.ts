export interface Work {
  id: string;
  category: 'illustration' | 'uiux' | 'recent';
  title: string;
  subtitle: string;
  year: string;
  tag: string;
  thumbnail: string;
  description: string;
  details: {
    role: string;
    client?: string;
    tools: string[];
    content: string;
    gallery: string[];
  };
}

export const allWorks: Work[] = [
  {
    id: 'mjdeng-sheng-xi',
    category: 'illustration',
    title: '梦境生息',
    subtitle: 'Illustration Works',
    year: '2024',
    tag: '个人创作',
    thumbnail: 'images/illustration-1.jpg',
    description: '梦境中的自然生机，探讨生命力的视觉化表达。',
    details: {
      role: '插画师 / 视觉设计',
      tools: ['Procreate', 'Photoshop'],
      content: '这组作品旨在捕捉自然界中那些细微而强烈的生命瞬间。通过柔和的光影处理和几何化的自然形态，构建出一个介于现实与梦境之间的艺术空间。每一根线条都经过反复推敲，以呈现出呼吸感。',
      gallery: [
         'images/illustration-1.jpg'
      ]
    }
  },
  {
    id: 'cheng-shi-zhe-die',
    category: 'illustration',
    title: '花叶之拥',
    subtitle: 'Illustration Works',
    year: '2024',
    tag: '商业插画',
    thumbnail: 'images/illustration-2.jpg',
    description: '花与人的和谐共处。',
    details: {
      role: '商业插画师',
      client: '某服装品牌',
      tools: ['Adobe Photoshop'],
      content: '花与少女的和谐相处，从自然而来的人，也必要拥抱自然。',
      gallery: [
         'images/illustration-2.jpg'
      ]
    }
  },
  {
    id: 'sheng-ji',
    category: 'illustration',
    title: '生机',
    subtitle: 'Illustration Works',
    year: '2023',
    tag: '品牌视觉',
    thumbnail: 'images/illustration-3.jpg',
    description: '极简线条勾勒的植物美学。',
    details: {
      role: '视觉设计师',
      tools: ['Ink', 'Illustrator'],
      content: '回归最纯粹的线条。这组作品探讨了单一线条在空间中如何创造动感与生命。',
      gallery: [
        'images/illustration-3.jpg'
      ]
    }
  },
  {
    id: 'artgallery-app',
    category: 'uiux',
    title: 'ArtGallery App',
    subtitle: 'Digital Experiences',
    year: '2024',
    tag: 'Figma',
    thumbnail: 'images/uiux-1.jpg',
    description: '打造沉浸式的数字艺术展览体验，极简交互设计。',
    details: {
      role: 'UI/UX 设计师',
      tools: ['Figma', 'Principle'],
      content: 'ArtGallery 是一款旨在连接艺术家与普通观众的设计。在界面上，我选择了极致的克制，让艺术作品本身成为唯一的干扰项。通过丝滑的转场和卡片式布局，为用户提供如同画廊漫步般的沉浸感受。',
      gallery: [
        'images/uiux-1.jpg'
      ]
    }
  },
  {
    id: 'aura-branding',
    category: 'uiux',
    title: 'Aura Branding',
    subtitle: 'Digital Experiences',
    year: '2024',
    tag: 'Web',
    thumbnail: 'images/uiux-2.jpg',
    description: '为独立品牌构建完整的数字视觉识别系统与官网体验。',
    details: {
      role: '品牌 & 网页设计师',
      tools: ['Figma', 'React', 'Tailwind'],
      content: 'Aura 是一个强调内在平衡的高端香氛品牌。在数字形象的构建中，我试图传达一种“不可见的精致”。从排版的呼吸感，到微动效带来的仪式感，每一个细节都在向用户传递品牌的核心价值：静谧与永恒。',
      gallery: [
        'images/uiux-2.jpg'
      ]
    }
  },
  {
    id: 'recent-exp-01',
    category: 'recent',
    title: '实验视觉 01',
    subtitle: 'Recent Works',
    year: '2024',
    tag: '2024',
    thumbnail: 'images/recent-1.jpg',
    description: '通过动态流动感，赋予静态图像生命。',
    details: {
      role: '视觉艺术家',
      tools: ['Blender', 'Cinema 4D'],
      content: '这是一组关于流体美学的纯视觉实验。',
      gallery: [
         'images/recent-1.jpg'
      ]
    }
  },
  {
    id: 'recent-typo-01',
    category: 'recent',
    title: '版式探索',
    subtitle: 'Recent Works',
    year: '2024',
    tag: '2024',
    thumbnail: 'images/recent-2.jpg',
    description: '探索文字在空间中的秩序感。',
    details: {
      role: '平面设计师',
      tools: ['InDesign'],
      content: '排版是设计的灵魂。本作品深入研究了负空间与文字节奏的关系。',
      gallery: [
         'images/recent-2.jpg'
      ]
    }
  },
  {
    id: 'recent-geo-01',
    category: 'recent',
    title: '自然几何',
    subtitle: 'Recent Works',
    year: '2023',
    tag: '2023',
    thumbnail: 'images/recent-3.jpg',
    description: '当自然形态遇到几何规律。',
    details: {
      role: '视觉设计师',
      tools: ['Illustrator', 'Pen & Paper'],
      content: '对大自然中的重复性规律进行几何化的提炼。',
      gallery: [
         'images/recent-3.jpg'
      ]
    }
  },
  {
    id: 'recent-brand-01',
    category: 'recent',
    title: '品牌提案',
    subtitle: 'Recent Works',
    year: '2023',
    tag: '2023',
    thumbnail: 'images/recent-4.jpg',
    description: '一套完整的品牌视觉语言探索。',
    details: {
      role: '品牌主理人',
      tools: ['Photoshop', 'Illustrator'],
      content: '这是一个关于品牌未来可能性的深度探索提案。',
      gallery: [
         'images/recent-4.jpg'
      ]
    }
  }
];
