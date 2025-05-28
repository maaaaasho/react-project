import { useContext } from "react";
import { CartContext } from "../context/ProductContext";
import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const  Cart=()=> {
  const { cartItems, removeFromCart, decreaseQuantity, totalPrice } = useContext(CartContext);
  return (
    <div className="fixed right-4 bottom-4 bg-white shadow-lg rounded-lg w-80 max-h-[70vh] overflow-y-auto flex flex-col">
      <div className="flex items-center justify-between bg-indigo-600 text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaShoppingCart  size={20} /> Cart
        </h3>
        <span className="font-bold">${totalPrice.toFixed(2)}</span>
      </div>
      {cartItems.length === 0 && (
        <p className="p-4 text-gray-700 text-center">Your cart is empty.</p>
      )}
      <ul className="flex-grow overflow-y-auto">
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center border-b border-gray-200 p-3 space-x-3">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex-grow">
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="bg-indigo-100 text-indigo-700 p-1 rounded hover:bg-indigo-200 mr-2"
              aria-label={`Decrease quantity of ${item.name}`}
              title={`Decrease quantity of ${item.name}`}
            >
                 -
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-100 text-red-700 p-1 rounded hover:bg-red-200"
              aria-label={`Remove ${item.name} from cart`}
              title={`Remove ${item.name} from cart`}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart