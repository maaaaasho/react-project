import { useContext, useState } from "react";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import { CartContext } from "./context/ProductContext";
import { DATA } from "./data/data";
import Cart from "./components/Cart";

const  App=()=> {
  const [selectedCategory, setSelectedCategory] = useState(DATA.categories[0].id);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart=(product)=> {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  }
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        categories={DATA.categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setSelectedProduct(null);
        }}
      />
      <main className="flex-1 bg-gray-50 overflow-auto">
        {!selectedProduct ? (
          <ProductList
            products={DATA.products[selectedCategory]}
            onSelectProduct={setSelectedProduct}
          />
        ) : (
          <ProductDetail
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={() => setSelectedProduct(null)}
          />
        )}
        </main>
      <Cart />
    </div>
  );
}
export default App;