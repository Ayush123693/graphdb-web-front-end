// DataUploadPage.js
import React, { useState } from 'react';

const DataUploadPage = () => {
  const [githubLink, setGithubLink] = useState('https://github.com/blazegraph');

  const handleGithubLinkChange = (e) => {
    setGithubLink(e.target.value);
  };

  const handleDataUpload = () => {
    console.log('Uploading data from GitHub link:', githubLink);
    // Implement actual data upload logic here
  };

  return (
    <div>
      <h1>Data Upload Page</h1>
      <input
        type="text"
        value={githubLink}
        onChange={handleGithubLinkChange}
      />
      <button onClick={handleDataUpload}>Upload Data</button>
    </div>
  );
};

export default DataUploadPage;