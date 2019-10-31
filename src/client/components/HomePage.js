import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>XML Creator</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Create XML <Link to="/xml-editor">XML Editor</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
