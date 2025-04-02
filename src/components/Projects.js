import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Meus Projetos</h2>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tecnologias: {project.technologies.join(', ')}</p>
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