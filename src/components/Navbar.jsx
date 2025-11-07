

import { Link } from "react-router-dom";
import { LogIn } from "lucide-react"; 

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-t from-blue-100 to-orange-100 py-5 px-10 text-blue-600 flex items-center justify-between shadow-sm">
      {/* Logo clicável */}
      <Link to="/">
        <img
          src="/src/assets/senac-logo.png"
          alt="Senac"
          className="h-20 hover:opacity-80 transition duration-200"
        />
      </Link>

      {/* Botão de Login */}
      <Link to="/login">
        <button className="relative flex items-center px-4 py-1 rounded-full bg-white text-blue-300 hover:text-white font-semibold shadow-md hover:bg-blue-300 transition-all duration-300 border-4 border-blue-300 hover:border-white">
          {/* Círculo com ícone */}
          <span className="hover:bg-blue-300 absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border-3 border-blue-300 hover:border-white -translate-x-3 shadow-lg">
            <LogIn className="w-5 h-5 text-blue-300 hover:bg-blue-300 hover:text-white  " />
          </span>
          <span className="ml-6 ">LOGIN</span>
        </button>
      </Link>
    </nav>
  );
}
