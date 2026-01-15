import { Link, useLocation } from "react-router-dom";
import { LogIn, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/admin-login" ||
    
    location.pathname.startsWith("/admin");

  // aQui é pra n renderizar o navbar nas rotas q eu quero
  if (hideNavbar) {
    return null;
  }

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* LOGO */}
      <Link to="/">
        <img
          src="/images/senac-logo2.png"
          alt="Senac"
          className="h-10"
        />
      </Link>

      {/* BOTÕES */}
      <div className="flex gap-3">
        {/* BOTÃO ADMIN */}
        <Link to="/admin-login">
          <button
            className="group relative flex items-center gap-2 px-6 py-2.5 rounded-xl
            bg-orange-400 text-white font-semibold
            border border-white/20
            hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600
            shadow-lg hover:shadow-orange-500/40
            transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
            ></div>

            <ShieldCheck className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">ADMIN</span>
          </button>
        </Link>

        {/* LOGIN */}
        <Link to="/login">
          <button
            className="group relative flex items-center gap-2 px-6 py-2.5 rounded-xl
            bg-gradient-to-r from-blue-400 to-blue-500
            text-white font-semibold
            shadow-lg hover:shadow-blue-500/40
            hover:from-blue-600 hover:to-orange-500
            transition-all duration-300
            transform hover:scale-[1.05] active:scale-[0.98]
            overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
            ></div>

            <LogIn className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="relative z-10">LOGIN</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}