import React from 'react';

const Sidebar = ({ selectedTool, onToolSelect }) => {
  const tools = ['circle', 'square', 'triangle'];

  return (
    <aside className="sidebar">
      <h3>Tools</h3>
      {tools.map((tool) => (
        <div
          key={tool}
          className={`tool ${tool} ${selectedTool === tool ? 'selected' : ''}`}
          onClick={() => onToolSelect(tool)}
        />
      ))}
    </aside>
  );
};

export default Sidebar;