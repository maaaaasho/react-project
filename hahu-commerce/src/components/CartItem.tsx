import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCart, type CartItem as CartItemType} from "../CartContext";

type Props = {
  item: CartItemType;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center space-x-4 py-4 border-b last:border-b-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-grow">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => decreaseQuantity(item.id)}
          aria-label={`Decrease quantity of ${item.name}`}
          className="text-gray-600 hover:text-blue-600 transition"
        >
          <AiOutlineMinus size={20} />
        </button>
        <span className="w-6 text-center">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item.id)}
          aria-label={`Increase quantity of ${item.name}`}
          className="text-gray-600 hover:text-blue-600 transition"
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>
      <div className="w-24 text-right font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name} from cart`}
        className="text-red-500 hover:text-red-700 transition ml-4"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
