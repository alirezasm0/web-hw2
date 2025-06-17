import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import Footer from './components/Footer';

function App() {
  // --- State Management ---
  const [shapes, setShapes] = useState([]);
  const [selectedTool, setSelectedTool] = useState(null);
  const [paintingTitle, setPaintingTitle] = useState('Painting board');

  // --- Event Handlers ---

  const handleCanvasClick = (x, y) => {
    if (!selectedTool) return;

    const newShape = {
      id: Date.now(), // identical id
      type: selectedTool,
      x: x - 25, // offset for inserting middle of shape on click area
      y: y - 25,
    };

    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  const handleShapeDoubleClick = (shapeId) => {
    setShapes((prevShapes) => prevShapes.filter((shape) => shape.id !== shapeId));
  };

  const handleToolSelect = (tool) => {
    setSelectedTool((currentTool) => (currentTool === tool ? null : tool));
  };
  
  const handleExport = () => {
    const data = {
      title: paintingTitle,
      shapes: shapes,
    };
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${paintingTitle.replace(/\s+/g, '_') || 'painting'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.title && Array.isArray(data.shapes)) {
          setPaintingTitle(data.title);
          setShapes(data.shapes);
        } else {
          alert('Invalid JSON file format.');
        }
      } catch (error) {
        alert('Error reading or parsing JSON file.');
        console.error("Import Error: ", error);
      }
    };
    reader.readAsText(file);
    event.target.value = null; 
  };


  return (
    <div className="app-container">
      <Header
        title={paintingTitle}
        onTitleChange={setPaintingTitle}
        onExport={handleExport}
        onImport={handleImport}
      />
      <div className="main-content">
        <Canvas
          shapes={shapes}
          onCanvasClick={handleCanvasClick}
          onShapeDoubleClick={handleShapeDoubleClick}
        />
        <Sidebar
          selectedTool={selectedTool}
          onToolSelect={handleToolSelect}
        />
      </div>
      <Footer shapes={shapes} />
    </div>
  );
}

export default App;