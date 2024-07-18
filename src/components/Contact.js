import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactContainer = styled.section`
  padding: 60px 20px;
  background-color: #00aaff;
  color: white;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation: ${fadeIn} 1.5s ease-out;

  & > * {
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    background: #fff;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    background: #fff;
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #00aaff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_wygujro',
      'template_73nuaff',
      formData,
      'YIFTUbjHt4302c4I2'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <ContactContainer>
      <h2>Contact</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Enter Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
