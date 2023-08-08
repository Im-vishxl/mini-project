import React from 'react';
import '../styles/Style.css'

const Spinner = ({ visible }) => {
  return visible ? (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default Spinner;
