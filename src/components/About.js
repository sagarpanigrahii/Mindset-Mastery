import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';

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

const AboutContainer = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: #f9f9f9;
  animation: ${fadeIn} 1s ease-out;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.6;
  color: #666;
`;

const Highlight = styled.span`
  color: #00aaff;
  font-weight: bold;
`;

const ReadMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #00aaff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0088cc;
    transform: scale(1.1);
  }
`;

const AdditionalContent = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Header />
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutContent>
          <p>
            Hello! I'm Sagar Panigrahi, a passionate and experienced professional in the field of self-improvement and coaching. With over <Highlight>10 years</Highlight> of experience, I have dedicated my career to helping individuals achieve their personal and professional goals.
          </p>
          <p>
            My journey started with a simple desire to help people unlock their full potential. Over the years, I have honed my skills and expanded my knowledge through continuous learning and practical experience. I believe in the power of <Highlight>positive thinking</Highlight> and the impact it can have on one’s life.
          </p>
          <p>
            I offer a range of services including free consultations, online coaching, and self-improvement workshops. Each service is designed to provide you with the tools and strategies you need to succeed. Whether you are looking to enhance your career, improve your personal relationships, or boost your overall well-being, I am here to guide you every step of the way.
          </p>
          <p>
            Let's work together to create a roadmap to your success. Click the button below to learn more about how I can help you.
          </p>
          <ReadMoreButton onClick={handleReadMoreClick}>
            {showMore ? 'Show Less' : 'Read More'}
          </ReadMoreButton>
          {showMore && (
            <AdditionalContent>
              <p>
                Over the past decade, I have worked with individuals from various backgrounds and industries. My approach is tailored to meet the unique needs of each client, ensuring personalized and effective coaching.
              </p>
              <p>
                In addition to one-on-one coaching, I have also conducted numerous workshops and seminars, sharing my insights and strategies with larger audiences. My goal is to empower as many people as possible to take control of their lives and achieve their dreams.
              </p>
              <p>
                I am committed to continuous growth and improvement, both for myself and for my clients. I regularly participate in professional development opportunities and stay up-to-date with the latest research and trends in the field of self-improvement.
              </p>
              <p>
                Thank you for taking the time to learn more about me. I look forward to the opportunity to work with you and support you on your journey to success.
              </p>
            </AdditionalContent>
          )}
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
