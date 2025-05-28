const Sidebar=({categories, selectedCategory, setSelectedCategory}) =>{
  return (
    <div className="flex flex-col bg-white border-r border-gray-200 w-64 h-screen p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-900 select-none">Categories</h2>
      <nav className="flex flex-col space-y-3">
        {categories.map(cat => {
          const IconComp = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center space-x-3 px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-100 transition-colors ${
                isSelected ? 'bg-indigo-200 font-semibold text-indigo-900' : ''
              }`}
              aria-current={isSelected ? 'page' : undefined}
            >
              <IconComp size={20} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
export default Sidebar