 
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartContextType = {
    showCart: boolean;
    setShowCart: (showCart: boolean) => void;
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
};