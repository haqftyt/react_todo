// ToggleButton.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Button = ({ isDarkMode, onToggle }) => {
  return (
    <button className='darkLight'onClick={onToggle}>
      {isDarkMode ? <FaSun style={{color:'white'}} /> : <FaMoon />}
    </button>
  );
};

export default Button;
