import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(187, 134, 252, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
  margin: 0.5rem 0;
`;

const ProjectTech = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.secondary};
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Meus Projetos</ProjectsTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.description}</ProjectDesc>
            <ProjectTech>Tecnologias: {project.technologies.join(', ')}</ProjectTech>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;