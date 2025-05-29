import React from "react";
import { useCart } from "../CartContext";

const CartBadge: React.FC = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs font-bold min-w-[20px] text-center">
      {totalQuantity}
    </span>
  );
};

export default CartBadge;
