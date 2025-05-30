
import { useCart } from "../CartContext";
import CartBadge from "./CartBadge"

// interface Val {
//     val: boolean
// }

const Navbar = () => {
    const { showCart,setShowCart } = useCart();
  return (
     <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-3xl font-bold text-blue-600">Clothy</h1>
          <button
            onClick={() => setShowCart(!showCart)}
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
  )
}

export default Navbar