import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import NewPage from './NewPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
