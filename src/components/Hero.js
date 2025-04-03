import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%);
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 600;
  background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  color: #b0b0b0;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Gabriel da Silva Freitas
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Analista de BI | Web & Mobile Developer
      </Subtitle>
    </HeroSection>
  );
};

export default Hero;