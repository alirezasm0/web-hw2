import React from 'react';

const Footer = ({ shapes }) => {
  const counts = {
    circle: shapes.filter((s) => s.type === 'circle').length,
    square: shapes.filter((s) => s.type === 'square').length,
    triangle: shapes.filter((s) => s.type === 'triangle').length,
  };

  return (
    <footer className="footer">
      <div className="shape-count">
        <div className="count-icon circle" />
        <span>{counts.circle}</span>
      </div>
      <div className="shape-count">
        <div className="count-icon square" />
        <span>{counts.square}</span>
      </div>
      <div className="shape-count">
        <div className="count-icon triangle" />
        <span>{counts.triangle}</span>
      </div>
    </footer>
  );
};

export default Footer;