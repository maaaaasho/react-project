import React, { useState } from "react";
import { CartProvider } from "./CartContext";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CartBadge from "./components/CartBadge";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "100% Cotton, comfortable fit.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    description: "Slim fit, stretch denim.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Black Leather Jacket",
    description: "Genuine leather, stylish and warm.",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=rop&w=400&q=80",
  },
  {
    id: 4,
    name: "Red Hoodie",
    description: "Soft fleece, perfect for cold days.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
  },
];

const App: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-3xl font-bold text-blue-600">Clothy</h1>
          <button
            onClick={() => setShowCart((val) => !val)}
            className="relative text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
              <circle cx={7} cy={21} r={1} />
              <circle cx={17} cy={21} r={1} />
            </svg>
            <CartBadge />
          </button>
        </header>
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </section>
          <section className="hidden md:block">{showCart && <Cart />}</section>
        </main>
        {/* Mobile cart slide up panel */}
        {showCart && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-300 p-4 z-50">
            <Cart />
            <button
              onClick={() => setShowCart(false)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Close Cart
            </button>
          </div>
        )}
      </div>
    </CartProvider>
  );
};

export default App;
