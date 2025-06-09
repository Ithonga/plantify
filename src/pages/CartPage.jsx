import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Total plants: <span className="text-green-700">{totalItems}</span>
            </p>
            <p className="text-lg font-semibold">
              Total cost: <span className="text-green-700">${totalPrice.toFixed(2)}</span>
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex space-x-4 justify-end">
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold"
            >
              Checkout
            </button>

            <Link
              to="/products"
              className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
