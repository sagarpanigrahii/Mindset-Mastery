import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #444;

  &:hover {
    color: #888;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #00aaff;
    box-shadow: 0 0 5px rgba(0, 170, 255, 0.5);
    outline: none;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #00aaff;
    box-shadow: 0 0 5px rgba(0, 170, 255, 0.5);
    outline: none;
  }
`;

const SubmitButton = styled.button`
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
    transform: scale(1.05);
  }
`;

const Modal = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'consultation',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      closeModal();
    }).catch((err) => {
      console.error('FAILED...', err);
    });
  };

  if (!showModal) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <h2>Book Online</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>
              Name:
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Label>
          </div>
          <div>
            <Label>
              Email:
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Label>
          </div>
          <div>
            <Label>
              Service:
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="consultation">Free Consultation</option>
                <option value="coaching">Online Coaching</option>
                <option value="workshop">Self-Improvement Workshop</option>
              </Select>
            </Label>
          </div>
          <SubmitButton type="submit">Book Now</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
