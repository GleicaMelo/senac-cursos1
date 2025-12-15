import { Link, useLocation } from "react-router-dom";
import { LogIn, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <nav className="bg-gradient-to-t from-blue-100 to-orange-100 py-5 px-10 text-blue-600 flex items-center justify-between shadow-sm">
      
      {/* Logo SEMPRE */}
      <Link to="/">
        <img
          src="/src/assets/senac-logo.png"
          alt="Senac"
          className="h-20 hover:opacity-80 transition duration-200"
        />
      </Link>

      {/* AÇÕES — só se NÃO for admin */}
      {!isAdminPage && (
        <div className="flex items-center gap-4">

          {/* ADMIN */}
          <Link to="/admin-login">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-red-500 font-semibold shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 border-4 border-red-500">
              <ShieldCheck className="w-5 h-5" />
              ADMIN
            </button>
          </Link>

          {/* LOGIN */}
          <Link to="/login">
            <button className="relative flex items-center px-4 py-1 rounded-full bg-white text-blue-300 hover:text-white font-semibold shadow-md hover:bg-blue-300 transition-all duration-300 border-4 border-blue-300 hover:border-white">
              <span className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border-3 border-blue-300 -translate-x-3 shadow-lg">
                <LogIn className="w-5 h-5 text-blue-300" />
              </span>
              <span className="ml-6">LOGIN</span>
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
}
