import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
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
              desenvolvimento web com React, Laravel e tecnologias modernas.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ mr: 2 }}
                href="/projetos"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contato"
              >
                Contato
              </Button>
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
                src="./src/assets/profile.jpg"
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