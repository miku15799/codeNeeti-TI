import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
   <>
   <Header/>
    <Router>
      <div className="app-content">
        <Routes> {/* Routes should be inside the Router */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;
