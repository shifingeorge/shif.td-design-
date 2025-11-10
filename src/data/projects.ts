import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Restorepoint',
    image: '/restore-point/cover.png',
    imageObjectPosition: '30% center',
    liveUrl: 'https://www.restorepoint.co.in/',
    caseStudies: {
      notion:
        'https://cedar-ninja-e62.notion.site/Restore-point-2a4dd300afb380f68986eec2debc61af?source=copy_link',
    },
  },
  {
    title: 'Luna Bloom',
    image: '/luna-bloom/cover.png',
    liveUrl: 'https://lunabloom.in/',
    caseStudies: {
      notion: 'https://notion.so/your-notion-link',
    },
  },
  {
    title: 'NT Digital (under construction)',
    image: '/ntdigital/cover.png',
    liveUrl: 'https://www.ntdigital.in/',
  },
  {
    title: 'Dresso',
    image: '/dresso/cover.jpg',
    imageObjectPosition: '10% center',
    liveUrl:
      'https://www.figma.com/community/file/1511432111707648819/dresso-e-commerce',
    caseStudies: {
      medium:
        'https://medium.com/@shif.td/dresso-ai-powered-fashion-companion-7cc2dca86a54',
    },
  },
];
