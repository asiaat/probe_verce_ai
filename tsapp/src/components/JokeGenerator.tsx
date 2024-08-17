import React, { useState, useEffect } from 'react';
import { openai } from "@ai-sdk/openai";
import { generateText, GenerateTextResult } from "ai";

const JokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateJoke = async () => {
    setIsLoading(true);
    try {
      const result: GenerateTextResult<Record<string, any>> = await generateText({
        model: openai("gpt-4o"),
        prompt: "Tell me a joke.",
      });
      // Eeldame, et nali on 'text' väljal
      setJoke(result.text || 'No joke was generated.');
    } catch (error) {
      console.error('Error generating joke:', error);
      setJoke('Failed to generate a joke. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div>
      <h2>AI Joke Generator</h2>
      {isLoading ? (
        <p>Generating a joke...</p>
      ) : (
        <>
          <p>{joke}</p>
          <button onClick={generateJoke}>Generate Another Joke</button>
        </>
      )}
    </div>
  );
};

export default JokeGenerator;