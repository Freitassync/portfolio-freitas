import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 2rem;
  text-align: center;
  background: rgba(18, 18, 18, 0.8);
  font-size: 0.9rem;
  color: #b0b0b0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>© 2025 Gabriel Freitas. Feito com React e 💜.</p>
    </FooterSection>
  );
};

export default Footer;