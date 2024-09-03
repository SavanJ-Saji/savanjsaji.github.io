import React, { useContext } from 'react';
import { ThemeContext } from './theme-provider';
import "./Toggle.css";

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="check" className="toggle-label"></label>
    </div>
  );
};

export default Toggle;
