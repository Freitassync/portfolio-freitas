import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const IconLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  margin: 0 1rem;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contato</h2>
      <div>
        <IconLink href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </div>
    </ContactSection>
  );
};

export default Contact;