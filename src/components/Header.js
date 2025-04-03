import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  z-index: 10;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  font-weight: 400;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="hero" smooth={true} duration={800}>Início</NavLink>
      <NavLink to="about" smooth={true} duration={800}>Sobre</NavLink>
      <NavLink to="projects" smooth={true} duration={800}>Projetos</NavLink>
      <NavLink to="contact" smooth={true} duration={800}>Contato</NavLink>
    </Nav>
  );
};

export default Header;