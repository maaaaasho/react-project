import { createContext, useState } from "react";

export const CartContext = createContext();
const  CartProvider=({children})=> {
  const [cartItems, setCartItems] = useState([]);
 const  addToCart=(product)=> {
    setCartItems(prevItems => {
      const exist = prevItems.find(item => item.id === product.id);
      if (exist) {
        return prevItems.map(item =>
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        return [...prevItems, {...product, quantity: 1}];
      }
    });
  }
  const removeFromCart=(productId)=> {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  }
  const decreaseQuantity=(productId)=> {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? {...item, quantity: Math.max(item.quantity -1, 1)} : item
      )
    );
  }
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, decreaseQuantity, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;