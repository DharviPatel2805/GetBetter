import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './assets/css/style.css';
import Home from './pages/Home';
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
