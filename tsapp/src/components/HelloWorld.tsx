// src/components/HelloWorld.tsx

import React, { useState } from 'react';

const HelloWorld: React.FC = () => {
  const [name, setName] = useState<string>('World');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
    </div>
  );
};

export default HelloWorld;