import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllTrains from './AllTrains';
import SingleTrain from './SingleTrain';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/single-train/:trainId" element={<SingleTrain />} />
          <Route path="/" element={<AllTrains />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
