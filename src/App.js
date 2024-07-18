import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import FreeConsultation from './components/FreeConsultation';
import OnlineCoaching from './components/OnlineCoaching';
import SelfImprovementWorkshop from './components/SelfImprovementWorkshop';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/online-coaching" element={<OnlineCoaching />} />
          <Route path="/self-improvement-workshop" element={<SelfImprovementWorkshop />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </>
);

export default App;
