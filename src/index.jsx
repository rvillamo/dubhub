import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Resources from './pages/Resources';
import About from './pages/About';
import NoPage from './pages/NoPage';
import WomxnCenter from './pages/WomxnCenter';
import SafetyEscorts from './pages/SafetyEscorts';

import './index.css';
import './fonts/AvenirLTStd-Black.otf';
import FreshHub from './pages/FreshHub/FreshHub';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="/About" element={<About />} />
          <Route path="/womxncenter" element ={<WomxnCenter />} />
          <Route path="/safetyEscorts" element={<SafetyEscorts/>} />
          <Route path="FreshHub" element={<FreshHub />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
