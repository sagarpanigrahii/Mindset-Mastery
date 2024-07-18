import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

const Container = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }

  .button {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 30px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 15px 30px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
  },
};

const FreeConsultation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wygujro', 'template_73nuaff', e.target, 'YIFTUbjHt4302c4I2')
      .then((result) => {
          console.log(result.text);
          closeModal();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container>
      <h2>Free Consultation</h2>
      <p>
        Get a free consultation to understand your needs and how we can work together to achieve your goals. Our team of experts is here to provide you with personalized advice and strategies tailored to your unique situation.
      </p>
      <button className="button" onClick={openModal}>Get Started</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles} contentLabel="Free Consultation Modal">
        <ModalContent>
          <h2>Consultation Form</h2>
          <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Describe Your Needs" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
          <button onClick={closeModal} style={{ marginTop: '15px', backgroundColor: '#ccc' }}>Close</button>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default FreeConsultation;
