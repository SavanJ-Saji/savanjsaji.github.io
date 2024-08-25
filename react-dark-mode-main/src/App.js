import React from "react";
import "./Toggle.css"; // Ensure you have the CSS for the toggle switch

export const Toggle = ({ isChecked, handleChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="slider round"></span>
    </label>
  );
};