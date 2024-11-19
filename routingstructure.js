import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
