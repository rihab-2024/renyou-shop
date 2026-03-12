export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.brand}</p>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3 hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}