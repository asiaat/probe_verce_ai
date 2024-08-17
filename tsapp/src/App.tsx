// src/App.tsx

import React from 'react';
import HelloWorld from './components/HelloWorld';
import JokeGenerator from './components/JokeGenerator';

const App: React.FC = () => {
  return (
    <div>
      <JokeGenerator />
    </div>
  );
};

export default App;