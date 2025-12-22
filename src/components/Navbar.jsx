import { Link, useLocation } from "react-router-dom";
import { LogIn, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname === "/admin-login";

  return (
    <nav className="bg-gradient-to-t from-blue-100 to-orange-100 py-5 px-10 flex items-center justify-between shadow-sm">
      
      {/* LOGO — SEMPRE VISÍVEL */}
      <Link to="/">
        <img
          src="/senac-logo.png"
          alt="Senac"
          className="h-20 hover:opacity-80 transition duration-200"
        />
      </Link>

      {/* AÇÕES — SOMEM NO ADMIN */}
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
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-400 font-semibold shadow-md hover:bg-blue-300 hover:text-white transition-all duration-300 border-4 border-blue-300">
              <LogIn className="w-5 h-5" />
              LOGIN
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
}