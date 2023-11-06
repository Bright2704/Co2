import React from 'react';
import './Section.css';


function Section({ title, children }) {
  return (
    <div className="section">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default Section;
