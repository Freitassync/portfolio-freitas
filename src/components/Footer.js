import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 1rem;
  text-align: center;
  background: ${props => props.theme.colors.background};
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2025 Freitas. Todos os direitos reservados.</p>
    </FooterSection>
  );
};

export default Footer;