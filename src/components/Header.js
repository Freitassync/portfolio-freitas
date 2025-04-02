import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink href="#hero">Início</NavLink>
      <NavLink href="#about">Sobre</NavLink>
      <NavLink href="#projects">Projetos</NavLink>
      <NavLink href="#contact">Contato</NavLink>
    </Nav>
  );
};

export default Header;