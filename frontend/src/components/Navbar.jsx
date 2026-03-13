export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Renyou Shop</h1>
      <ul className="flex gap-6">
        <li>
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="hover:text-gray-200">
            Products
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-200">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
