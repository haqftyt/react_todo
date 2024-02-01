// LightDarkMode.js
import React, { useState } from 'react';
import Button from './Button';
import TodoList from './TodoList';

const LightDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Implement logic to toggle between light and dark mode styles
  };

  return (
    <div className={isDarkMode ? 'light-mode' : 'dark-mode'}>
      <div className="container">
     <div className='Head'>
     <h1>React Todo List</h1>
      <Button  isDarkMode={isDarkMode} onToggle={handleToggle} />
     </div>
      <div className="listbox">
       <TodoList/>
      </div>
    </div>
    </div>
  );
};

export default LightDark;
