import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  Chip,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WebIcon from '@mui/icons-material/Web';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';

const skills = [
  {
    name: 'React',
    icon: 'devicon-react-original colored',
    color: '#61DAFB'
  },
  {
    name: 'Laravel',
    icon: 'devicon-laravel-plain colored',
    color: '#FF2D20'
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain colored',
    color: '#F7DF1E'
  },
  {
    name: 'PHP',
    icon: 'devicon-php-plain colored',
    color: '#777BB4'
  },
  {
    name: 'Python',
    icon: 'devicon-python-plain colored',
    color: '#306998'
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain colored',
    color: '#239120'
  },
  {
    name: 'PostgreSQL',
    icon: 'devicon-postgresql-plain colored',
    color: '#336791'
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain colored',
    color: '#4479A1'
  },
  {
    name: 'Docker',
    icon: 'devicon-docker-plain colored',
    color: '#2496ED'
  },
  {
    name: 'Git',
    icon: 'devicon-git-plain colored',
    color: '#F05032'
  },
  {
    name: 'Linux',
    icon: 'devicon-linux-plain colored',
    color: '#FCC624'
  }
];

const experiences = [
  {
    company: 'ChatADV',
    position: 'Desenvolvedor Full Stack Junior', 
    period: 'Março 2025 - Presente',
    description: 'Desenvolvimento e manutenção do sistema Web ChatADV, um sistema de IA para área jurídica brasileira.',
    technologies: ['React', 'Laravel', 'Python', 'JavaScript', 'PHP', 'Docker', 'Git']
  },
  {
    company: 'MW Soluções',
    position: 'Desenvolvedor de Analise de Dados',
    period: 'Novembro 2024 - Março 2025',
    description: 'Desenvolvimento e manutenção do EasyBI, um sistema de monitoramento voltado para análise e gestão de dados e metricas financeiras de provedores de internet.',
    technologies: ['Python', 'PostgreSQL', 'MySQL', 'QuestDB', 'Docker', 'Git', 'Linux']
  },
  {
    company: 'Metropole Digital',
    position: 'Desenvolvedor de Games',
    period: 'Setembro 2024 - Março 2025',
    description: 'Desenvolvimento de jogos sobre Bioinformática.',
    technologies: ['C#', 'Unity', 'Git']
  },
  {
    company: 'UFRN',
    position: 'Cientista de Dados',
    period: 'Setembro 2022 - Agosto 2023',
    description: 'Analise e processamento de sinais de ratos em experimentos de corrida em esteira',
    technologies: ['Matlab']
  }
];

const education = [
  {
    course: 'Bacharelado em Ciências e Tecnologia',
    institution: 'Universidade Federal do Rio Grande do Norte',
    period: 'Setembro 2024 - Presente'
  },
  {
    course: 'Técnico em Informática para Internet',
    institution: 'Instituto Metrópole Digital',
    period: 'Março 2022 - Janeiro 2025'
  },
  {
    course: 'Técnico em Informática',
    institution: 'Escola Agricola de Jundiai | UFRN',
    period: 'Março 2021 - Dezembro 2023'
  }
];

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Seção Sobre Mim */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" gutterBottom>
              Sobre Mim
            </Typography>
            <Typography variant="body1" paragraph>
              Sou Gabriel Henrique Rocha de Carvalho, Desenvolvedor Fullstack com experiência em Inteligência Artificial, Análise de Dados e estudante do Bacharelado em Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte. Minha paixão por tecnologia e criatividade me impulsiona a buscar soluções inovadoras e entregar projetos de alta qualidade.
            </Typography>
            <Typography variant="body1" paragraph>
              Minha jornada na programação começou durante meu ensino médio técnico, e desde
              então venho me especializando em JavaScript, PHP, Python e seu ecossistema.
              Atualmente, foco em desenvolvimento com React, Laravel e tecnologias
              relacionadas.
            </Typography>
          </motion.div>
        </Grid>

        {/* Seção Tecnologias & Ferramentas */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" gutterBottom>
              Tecnologias & Ferramentas
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: 3,
                my: 4,
              }}
            >
              {skills.map((skill) => (
                <Paper
                  key={skill.name}
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <i
                    className={skill.icon}
                    style={{
                      fontSize: '2.5rem',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  />
                  <Typography variant="body2">
                    {skill.name}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
        </Grid>

        {/* Seção Experiência Profissional */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" gutterBottom>
              Experiência Profissional
            </Typography>
            <Grid container spacing={3}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={3}
                    sx={{ p: 3, '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {exp.position}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>

        {/* Seção Formação Acadêmica */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: '100%' }}
          >
            <Typography variant="h4" gutterBottom>
              Formação Acadêmica
            </Typography>
            <Timeline
              sx={{
                height: '100%',
                [`& .MuiTimelineItem-root:before`]: {
                  flex: 0,
                },
                p: 0,
              }}
            >
              {education.map((edu, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <SchoolIcon />
                    </TimelineDot>
                    {index < education.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        mb: 2,
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          transition: 'transform 0.3s'
                        }
                      }}
                    >
                      <Typography variant="h6" component="h3">
                        {edu.course}
                      </Typography>
                      <Typography color="primary">
                        {edu.institution}
                      </Typography>
                      <Typography color="text.secondary" variant="subtitle2">
                        {edu.period}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 