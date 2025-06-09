import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center px-6 text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
        Plantify
      </h1>
      <p className="max-w-xl text-white text-lg mb-8 drop-shadow-md">
        At Plantify, we are passionate about bringing the beauty of nature
        indoors. Discover our handpicked selection of vibrant, easy-to-care-for
        houseplants that will brighten your home and purify your air.
      </p>
      <Link
        to="/products"
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded text-xl font-semibold shadow-lg transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
