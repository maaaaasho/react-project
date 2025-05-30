
import { CartProvider, useCart } from "./CartContext";

import Cart from "./components/Cart";


import Navbar from "./components/Navbar";
import Products from "./components/Products";



const App: React.FC = () => {
 
const {showCart, setShowCart}  = useCart()
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
       <Navbar />
       <Products/>
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
