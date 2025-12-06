// src/ui/Glass.jsx
import React from "react";
import "./Glass.css"; 

const Glass = ({ children, className = "" }) => {
  return (
    <div className={`glass-card ${className}`}>
      <div className="glass1"></div>
      <div className="glass2"></div>
      <div className="highlight"></div>
      {children}
    </div>
  );
};

export default Glass;
