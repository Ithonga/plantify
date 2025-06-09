import React from 'react';
import { Link, NavLink } from 'react-router';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-green-300">
          Plantify
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 flex items-center">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'underline text-green-300 font-semibold' : 'hover:text-green-300'
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'underline text-green-300 font-semibold flex items-center relative'
                : 'hover:text-green-300 flex items-center relative'
            }
          >
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
              />
            </svg>

            Cart

            {/* Badge */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 rounded-full px-2 text-xs font-bold">
                {totalItems}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
