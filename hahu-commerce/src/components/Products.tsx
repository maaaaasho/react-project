import { useCart } from "../CartContext"
import { products } from "../data/data"
import Cart from "./Cart"
import ProductCard from "./ProductCard"


const Products = () => {
    const {showCart} = useCart();
  return (
     <main className="flex-grow container mx-auto px-4 py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </section>
          <section className="hidden md:block">{showCart && <Cart />}</section>
        </main>
  )
}

export default Products