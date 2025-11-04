import { Link } from "react-router-dom";

// Aqui é onde a gente pode mexer no Navbar
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-t from-blue-100 to-orange-100 py-5 px-10 text-blue-600 flex items-center justify-between shadow-sm">
      {/* Logo clicável */}
      <Link to="/">
        <img
          src="/src/assets/senac-logo.png"
          alt="Senac"
          className="h-18 hover:opacity-80 transition duration-200"
        />
      </Link>

      <div className="flex space-x-4">
        <Link to="/cursos.jsx">
          <button className="text-blue-600 px-4 py-2 rounded hover:text-orange-500 transition duration-200">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
