import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Title>Freitas</Title>
      <Subtitle>Desenvolvedor Web</Subtitle>
    </HeroSection>
  );
};

export default Hero;