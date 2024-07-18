import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from './Modal';


const backgroundAnimation = keyframes`
  0% { background-color: #ffecb3; }
  20% { background-color: #fff9c4; }
  40% { background-color: #ffccbc; }
  60% { background-color: #ffecb3; }
  80% { background-color: #dcedc8; }
  100% { background-color: #e0f7fa; }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${backgroundAnimation} 30s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); /* Slight dark overlay */
    z-index: 1;
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 2s ease-out;

  h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: ${fadeIn} 1.5s ease-out;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 40px;
    animation: ${fadeIn} 1.8s ease-out;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #00aaff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #0088cc;
      transform: scale(1.1);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 8px 16px;
    }
  }
`;

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <HeroContainer>
      <HeroText>
        <h1>SUCCESS</h1>
        <p>Ambition is the first step towards success</p>
        <button onClick={openModal}>Book Online</button>
      </HeroText>
      <Modal showModal={showModal} closeModal={closeModal} />
    </HeroContainer>
  );
};

export default Hero;
