import rdImage from '../assets/rd.png';
import mwImage from '../assets/mw.png';
import dvImage from '../assets/devfolio.png';
import vdImage from '../assets/vd.png';

export const projects = [
  {
    id: 1,
    title: 'Devfolio',
    description: 'Devfolio desenvolvido para apresentar meus projetos e minhas habilidades como desenvolvedor.',
    image: dvImage,
    technologies: ['React', 'Vite', 'MUI', 'JavaScript'],
    githubUrl: 'https://github.com/Gabrielrc11/devfolio',
  },
  {
    id: 2,
    title: 'Versículo Diário',
    description: 'Uma aplicação React que mostra um versículo bíblico aleatório todos os dias.',
    image: vdImage,
    technologies: ['React', 'Vite', 'MUI', 'JavaScript'],
    githubUrl: 'https://github.com/Gabrielrc11/versiculo_diario',
    liveUrl: 'https://versiculo-diario.vercel.app/',
  },
  {
    id: 3,
    title: 'RD Facilities',
    description: 'Meu primeiro projeto como freelancer, um sistema de gerenciamento de condomínios.',
    image: rdImage,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Gabrielrc11/rd_facilities',
    liveUrl: 'https://rd-facilities.vercel.app/',
  },
  {
    id: 4,
    title: 'Desafio MW Soluções',
    description: 'Desafio desenvolvido para a empresa MW Soluções, um sistema de monitoramento de dados.',
    image: mwImage,
    technologies: ['Python'],
    githubUrl: 'https://github.com/Gabrielrc11/mw_desafio',
  },
]; 