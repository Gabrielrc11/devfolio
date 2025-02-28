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
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SLIDE_IN_LEFT, SLIDE_IN_RIGHT } from '../constants/animations';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const SOCIAL_LINKS = [
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

const ContactForm = ({ formData, handleChange, handleSubmit }) => (
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
);

const SocialLinks = () => (
  <Box
    sx={{
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      justifyContent: 'center',
      mt: 4,
    }}
  >
    {SOCIAL_LINKS.map((social) => (
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
);

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

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
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <motion.div {...SLIDE_IN_LEFT}>
            <Typography variant="h3" gutterBottom>
              Entre em Contato
            </Typography>
            <Typography variant="body1" paragraph>
              Tem alguma pergunta ou proposta de projeto? Ficarei feliz em
              conversar com você! Preencha o formulário ou use um dos canais de
              contato abaixo.
            </Typography>
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div {...SLIDE_IN_RIGHT}>
            <Typography variant="h4" gutterBottom>
              Redes Sociais
            </Typography>
            <Typography variant="body1" paragraph>
              Você também pode me encontrar nas seguintes plataformas:
            </Typography>
            <SocialLinks />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 