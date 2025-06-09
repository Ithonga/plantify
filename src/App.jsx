import React from 'react';
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage'; // coming soon
import CartPage from './pages/CartPage'; // coming soon
import Header from './components/Header'; // coming soon

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
