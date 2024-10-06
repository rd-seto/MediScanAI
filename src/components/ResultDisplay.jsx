import React from 'react';

function ResultDisplay({ result, isAnalyzing }) {
  if (isAnalyzing) {
    return <p>Analyzing image... Please wait.</p>;
  }

  if (!result) {
    return <p>Upload an image to see the analysis result.</p>;
  }

  return (
    <div className="result">
      <h2>Analysis Result</h2>
      <p><strong>Detected Disease:</strong> {result.disease}</p>
      <p><strong>Probability:</strong> {(result.probability * 100).toFixed(2)}%</p>
      <p><strong>Details:</strong> {result.details}</p>
    </div>
  );
}

export default ResultDisplay;