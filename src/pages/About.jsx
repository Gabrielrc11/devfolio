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
import { skills, experiences, education } from '../data/aboutData';

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