import { Box, Container, Typography, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          minHeight: 'calc(100vh - 64px)',
          py: 8,
        }}
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Olá, eu sou
              <Box component="span" sx={{ color: 'primary.main' }}>
                {' '}
                Gabriel Carvalho
              </Box>
            </Typography>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Desenvolvedor Full Stack
            </Typography>
            <Typography variant="body1" paragraph>
              Transformando ideias em soluções digitais inovadoras. Especializado em
              desenvolvimento WEB com React, Laravel e tecnologias modernas.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ mr: 2 }}
                onClick={() => navigate(ROUTES.PROJECTS)}
              >
                Ver Projetos
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Contato
              </Button>
              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <IconButton
                  href="https://www.linkedin.com/in/gabriel-carvalho-7911a225b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  size="large"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Gabrielrc11"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  size="large"
                >
                  <GitHubIcon />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Desenvolvedor"
                sx={{
                  width: '100%',
                  maxWidth: { xs: 200, md: 250 },
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: { xs: 4, md: 0 },
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 