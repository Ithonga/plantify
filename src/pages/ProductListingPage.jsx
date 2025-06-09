import React from 'react';
import PlantCard from '../components/PlantCard';
import products from '../data/product'

const categories = [...new Set(products.map(p => p.category))]; // Unique categories

const ProductListingPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-green-800">Our Houseplants</h2>

      {categories.map(category => (
        <section key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products
              .filter(plant => plant.category === category)
              .map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListingPage;
