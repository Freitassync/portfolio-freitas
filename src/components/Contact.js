import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IconLink = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  font-size: 2.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Entre em Contato</ContactTitle>
      <SocialLinks>
        <IconLink
          href="https://github.com/Freitassync"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/gabriel-da-silva-freitas/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/freitasbtw_/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </IconLink>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;