import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ChatBotOne from './components/ChatBotOne';

// Lihtne koduleht
const Home = () => <h1>Avaleht</h1>;
const About = () => <h1>Meist</h1>;
const Contact = () => <h1>Kontakt</h1>;



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Avaleht</Link></li>
            <li><Link to="/about">Meist</Link></li>
            <li><Link to="/chatbot">ChatBot</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<ChatBotOne />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;