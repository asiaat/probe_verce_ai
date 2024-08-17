import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ChatBotOne = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      // Siin võiks olla loogika vastuse saamiseks serverilt
      setMessages(msgs => [...msgs, { text: "Vastus serverilt", user: false }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Saada</button>
    </div>
  );
};

// Lisame renderdamise loogika
if (typeof document !== 'undefined') {
  ReactDOM.render(<ChatBotOne />, document.getElementById('chatbot-root'));
}

export default ChatBotOne;