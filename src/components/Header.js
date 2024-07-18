import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  z-index: 1000;
  transition: background 0.3s;
`;

const Logo = styled(Link)`
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  position: absolute;
  left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    background: #fff;
    position: absolute;
    top: 60px;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #00aaff;
  }
`;

const MenuIcon = styled.div`
  display: none;
  position: absolute;
  right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo to="/">Mindset Mastery</Logo>
      <MenuIcon onClick={toggleMenu}>
        &#9776; 
      </MenuIcon>
      <Nav isOpen={isOpen}>
        <NavItem to="/" onClick={toggleMenu}>Home</NavItem>
        <NavItem to="/about" onClick={toggleMenu}>About</NavItem>
        <NavItem to="/services" onClick={toggleMenu}>Services</NavItem>
        <NavItem to="/blog" onClick={toggleMenu}>Blog</NavItem>
        <NavItem to="/contact" onClick={toggleMenu}>Contact</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
