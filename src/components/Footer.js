import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FooterContainer = styled.footer`
  background: transparent;
  color: black;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  animation: ${fadeIn} 1s ease-out;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Mindset Mastery. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
