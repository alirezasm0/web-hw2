import React from 'react';
import Shape from './Shape';

const Canvas = ({ shapes, onCanvasClick, onShapeDoubleClick }) => {
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onCanvasClick(x, y);
  };

  return (
    <main className="canvas" onClick={handleClick}>
      {shapes.map((shape) => (
        <Shape
          key={shape.id}
          shape={shape}
          onDoubleClick={onShapeDoubleClick}
        />
      ))}
    </main>
  );
};

export default Canvas;