import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import rdImage from '../assets/rd.png';
import mwImage from '../assets/mw.png';
import svImage from '../assets/sv.png';
import dvImage from '../assets/devfolio.png';
import vdImage from '../assets/vd.png';

const projects = [
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
  {
    id: 5,
    title: 'Sunrise Village',
    description: 'Jogo RPG desenvolvido para evoluir minhas habilidades com desenvolvimento de jogos.',
    image: svImage,
    technologies: ['C#', 'Unity'],
    githubUrl: 'https://github.com/Gabrielrc11/sunrise_village',
  },
];

const Projects = () => {
  const handleDemoClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ mb: 6, textAlign: 'center' }}
      >
        Meus Projetos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                  >
                    Código
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      onClick={() => handleDemoClick(project.liveUrl)}
                    >
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 