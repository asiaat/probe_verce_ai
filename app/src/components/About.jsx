import React from 'react';
import ReactDOM from 'react-dom';

function About() {
  return <h2>Meist</h2>;
}

// Lisame renderdamise loogika
if (typeof document !== 'undefined') {
  ReactDOM.render(<About />, document.getElementById('root'));
}

export default About;