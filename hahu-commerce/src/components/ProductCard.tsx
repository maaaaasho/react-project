import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../CartContext";
import type { Product } from "../types/types";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm flex-grow">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center"
            aria-label={`Add ${product.name} to cart`}
          >
            <FiShoppingCart className="mr-1" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
