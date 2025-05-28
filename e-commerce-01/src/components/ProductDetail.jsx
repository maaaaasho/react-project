import React from 'react'

const ProductDetail=({product, onAddToCart, onBack}) =>{
  if (!product) return null;
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition"
        aria-label="Go back to products"
      >
        ← Back to products
      </button>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 rounded-lg object-cover"
          loading="lazy"
        />
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{product.name}</h2>
          <p className="text-indigo-600 font-semibold text-xl mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 flex-grow">{product.description}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition self-start"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail