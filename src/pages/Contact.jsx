import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  WhatsApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      to: 'gabrielrc.dev@gmail.com',
      subject: formData.subject,
      body: `
        Nome: ${formData.name}
        Email: ${formData.email}
        Mensagem: ${formData.message}
      `
    };

    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    console.log('Form data:', formData);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Email />,
      link: 'mailto:gabrielhenriquerc11@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/in/gabriel-carvalho-7911a225b/',
    },
    {
      name: 'GitHub',
      icon: <GitHub />,
      link: 'https://github.com/Gabrielrc11',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" gutterBottom>
              Entre em Contato
            </Typography>
            <Typography variant="body1" paragraph>
              Tem alguma pergunta ou proposta de projeto? Ficarei feliz em
              conversar com você! Preencha o formulário ou use um dos canais de
              contato abaixo.
            </Typography>
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Assunto"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Enviar Mensagem
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" gutterBottom>
              Redes Sociais
            </Typography>
            <Typography variant="body1" paragraph>
              Você também pode me encontrar nas seguintes plataformas:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: 4,
              }}
            >
              {socialLinks.map((social) => (
                <Paper
                  key={social.name}
                  elevation={2}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    minWidth: 120,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s',
                    },
                  }}
                >
                  <IconButton
                    color="primary"
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </IconButton>
                  <Typography variant="body2">{social.name}</Typography>
                </Paper>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 