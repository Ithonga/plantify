import React from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
} from '../components/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="flex items-center border-b py-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded mr-4"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-green-700 font-bold">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrease}
          disabled={item.quantity <= 1}
          className={`px-3 py-1 rounded ${
            item.quantity <= 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
        >
          +
        </button>
      </div>

      <button
        onClick={handleRemove}
        className="ml-6 px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
