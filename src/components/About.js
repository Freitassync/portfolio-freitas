import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2>Sobre Mim</h2>
      <p>Sou Freitas, um desenvolvedor apaixonado por criar soluções modernas e minimalistas.</p>
    </AboutSection>
  );
};

export default About;