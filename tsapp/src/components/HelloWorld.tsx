// src/components/HelloWorld.tsx

import React, { useState } from 'react';
import { useChat } from 'ai/react';

const HelloWorld: React.FC = () => {
  const [name, setName] = useState<string>('World');
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Terekest, {name}!</h1>
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