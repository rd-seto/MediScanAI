import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = async (image) => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        disease: "Lung Cancer",
        probability: 0.85,
        details: "Abnormal mass detected in the upper right lobe."
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MediScan AI</h1>
        <p>Advanced Medical Image Analysis</p>
      </header>
      <main>
        <section className="intro">
          <h2>Welcome to MediScan AI</h2>
          <p>Upload medical images for instant disease detection powered by advanced machine learning algorithms.</p>
        </section>
        <section className="upload-section">
          <h3>Analyze Your Medical Image</h3>
          <ImageUpload onUpload={handleImageUpload} isAnalyzing={isAnalyzing} />
        </section>
        <section className="result-section">
          <ResultDisplay result={result} isAnalyzing={isAnalyzing} />
        </section>
        <section className="features">
          <h3>Our Features</h3>
          <ul>
            <li>Instant analysis of X-rays, MRIs, and CT scans</li>
            <li>High accuracy powered by state-of-the-art AI</li>
            <li>Secure and confidential processing</li>
            <li>Support for multiple disease detections</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 MediScan AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;