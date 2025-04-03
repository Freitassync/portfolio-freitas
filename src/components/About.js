import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  padding: 5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.5);
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #d0d0d0;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 2px solid ${props => props.theme.colors.primary};
`;

const About = () => {
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ProfileImage src="https://media.licdn.com/dms/image/v2/D4D03AQFGITYili_ZPw/profile-displayphoto-shrink_400_400/B4DZRlBJTKHcAs-/0/1736861587591?e=1749081600&v=beta&t=yPd1tY2XEegaD2jUDi_qq3F2kloYElWquhBBP6LdfTs" alt="Gabriel da Silva Freitas" />
      <AboutTitle>Sobre Mim</AboutTitle>
      <AboutText>
        Meu nome é Gabriel da Silva Freitas, tenho 20 anos e sou Analista com experiência em Web, Mobile e Business Intelligence (BI).
      </AboutText>
      <AboutText>
        Atualmente, trabalho como Analista de BI na JBS, onde utilizo ferramentas como QlikSense e SQL para transformar dados em insights valiosos. Paralelamente, curso Sistemas de Informação na FIAP, aprimorando meus conhecimentos em tecnologia.
      </AboutText>
      <AboutText>
        Na área Web, tenho experiência com React, MongoDB, HTML, CSS, JavaScript e Node.js. Em Mobile, trabalho com Flutter. Em BI, destaco minha atuação com QlikSense e SQL.
      </AboutText>
    </AboutSection>
  );
};

export default About;