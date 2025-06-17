import React from 'react';

const Shape = ({ shape, onDoubleClick }) => {
  const style = {
    left: `${shape.x}px`,
    top: `${shape.y}px`,
  };

  const shapeClass = `shape shape-${shape.type}`;

  return (
    <div
      style={style}
      className={shapeClass}
      onDoubleClick={() => onDoubleClick(shape.id)}
    />
  );
};

export default Shape;