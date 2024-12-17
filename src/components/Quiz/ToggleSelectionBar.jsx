import React, { useState } from 'react';
import './ToggleSelectionBar.css';

const ToggleSelectionBar = () => {
  const [selectedOption, setSelectedOption] = useState('quiz');

  const handleSelect = (selection) => {
    setSelectedOption(selection);
  };

  return (
    <div className="toggle-container">
      <div className="toggle-bar">
        <div
          className={`toggle-option ${selectedOption === 'quiz' ? 'active' : ''}`}
          onClick={() => handleSelect('quiz')}
        >
          Quiz
        </div>
        <div
          className={`toggle-option ${selectedOption === 'leaderboard' ? 'active' : ''}`}
          onClick={() => handleSelect('leaderboard')}
        >
          Leaderboard
        </div>
      </div>
      <div className={`toggle-indicator ${selectedOption}`} />
    </div>
  );
};

export default ToggleSelectionBar;
