import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white py-5 px-10 text-blue-600 p-4 flex items-center justify-between">
        <img src="/src/assets/images.png" alt="senac" className="h-12" />

      <div className="flex space-x-4">

        <Link to="/login">
          <button className="text-blue-600 px-4 py-2 rounded hover:text-orange-500">
            Login
          </button>
        </Link>

        <Link to="/catalogo">
          <button className=" text-blue-600 px-4 py-2 rounded hover:text-orange-500">
            Categorías
          </button>
        </Link>

      </div>
    </nav>
  );
}
