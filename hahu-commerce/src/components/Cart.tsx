import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../CartContext";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto md:mx-0 md:w-96 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FiShoppingCart className="mr-2" /> Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex-grow overflow-auto max-h-96">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-4 border-t pt-4 flex justify-between items-center">
            <span className="font-bold text-xl">Total:</span>
            <span className="font-bold text-xl">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => alert("Checkout successful!")}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded text-lg"
          >
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="mt-2 text-red-600 hover:text-red-800"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
