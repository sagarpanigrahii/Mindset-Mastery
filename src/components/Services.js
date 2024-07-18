import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f0f0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
  }
`;

const ServiceBox = styled(Link)`
  display: inline-block;
  width: 30%;
  margin: 10px;
  padding: 30px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #00aaff;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #00aaff;
`;

const Services = () => (
  <ServicesContainer>
    <h2>How I Can Help You</h2>
    <ServiceBox to="/free-consultation">
      <ServiceIcon>💬</ServiceIcon>
      <h3>Free Consultation</h3>
      <p>
        Get a free consultation to understand your needs and how we can work
        together to achieve your goals.
      </p>
    </ServiceBox>
    <ServiceBox to="/online-coaching">
      <ServiceIcon>💻</ServiceIcon>
      <h3>Online Coaching</h3>
      <p>
        Receive personalized coaching sessions online to help you improve your
        skills and reach your full potential.
      </p>
    </ServiceBox>
    <ServiceBox to="/self-improvement-workshop">
      <ServiceIcon>📈</ServiceIcon>
      <h3>Self-Improvement Workshop</h3>
      <p>
        Participate in workshops designed to help you develop new skills and
        improve your personal and professional life.
      </p>
    </ServiceBox>
  </ServicesContainer>
);

export default Services;
