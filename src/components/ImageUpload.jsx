import React, { useState } from 'react';

function ImageUpload({ onUpload, isAnalyzing }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} accept="image/*" disabled={isAnalyzing} />
      <button type="submit" disabled={!selectedFile || isAnalyzing}>
        {isAnalyzing ? 'Analyzing...' : 'Upload and Analyze'}
      </button>
    </form>
  );
}

export default ImageUpload;