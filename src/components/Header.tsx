import React, { useRef } from 'react';

const Header = ({ title, onTitleChange, onExport, onImport }) => {
  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  return (
    <header className="header">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Painting Title"
      />
      <div className="buttons">
        <button onClick={onExport}>Export</button>
        <button onClick={handleImportClick}>Import</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={onImport}
          accept=".json"
        />
      </div>
    </header>
  );
};

export default Header;