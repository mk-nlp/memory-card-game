import React, { createContext, useState, useContext } from 'react';

const ScoreContext = createContext();

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const value = {
    score,
    setScore,
    highScore,
    setHighScore,
  };

  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};