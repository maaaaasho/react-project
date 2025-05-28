const ProductList=({products, onSelectProduct})=> {
  if (!products || products.length === 0) {
    return <p className="text-gray-500 p-4">No products available.</p>;
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
      {products.map(prod => (
        <div
          key={prod.id}
          className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow flex flex-col"
          onClick={() => onSelectProduct(prod)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') onSelectProduct(prod)}}
        >
          <img
            src={prod.image}
            alt={prod.name}
            className="h-48 w-full object-cover rounded-t-lg"
            loading="lazy"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-lg text-gray-900">{prod.name}</h3>
            <p className="text-indigo-600 font-bold mt-auto">${prod.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;