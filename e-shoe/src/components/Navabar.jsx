

const Navabar = () => {
  return (
      <header class="bg-white bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-3xl font-extrabold text-purple-700">Shoe Shop</h1>
      <button id="cart-button" aria-label="Shopping Cart" class="relative group">
        <svg class="w-8 h-8 text-purple-700 hover:text-purple-900 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span id="cart-count" class="absolute -top-1 -right-2 bg-purple-700 text-white text-xs rounded-full px-1.5 font-semibold transition-all">0</span>
      </button>
    </div>
  </header>
  )
}

export default Navabar