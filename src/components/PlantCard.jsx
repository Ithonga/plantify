import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../components/CartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();

  // Grab cart items to check if this plant is already added
  const cartItems = useSelector(state => state.cart.cartItems);
  const isAdded = cartItems.some(item => item.id === plant.id);

  // Local disabled state synced with redux
  const [disabled, setDisabled] = useState(isAdded);

  useEffect(() => {
    setDisabled(isAdded);
  }, [isAdded]);

  const handleAddToCart = () => {
    if (!disabled) {
      dispatch(addItemToCart(plant));
      setDisabled(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-40 h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-1">{plant.name}</h3>
      <p className="text-green-700 font-bold mb-4">${plant.price.toFixed(2)}</p>
      <button
        disabled={disabled}
        onClick={handleAddToCart}
        className={`w-full px-4 py-2 rounded text-white font-semibold ${
          disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {disabled ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
