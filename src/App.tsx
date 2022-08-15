import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductDetails from './components/productDetails';
import ProductListing from './components/productListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product-details/:productId" element={<ProductDetails/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
