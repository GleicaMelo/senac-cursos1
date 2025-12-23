import { Link, useLocation } from "react-router-dom";
import { LogIn, ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname === "/admin-login";

  return (
    <nav className="bg-gradient-to-br from-blue-200 via-orange-200 to-blue-200 backdrop-blur-xl">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="relative">
              {/* Container com efeito glassmorphism */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              
              <img
                src="/senac-logo.png"
                alt="Senac"
                className="h-14 relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            </div>
          </Link>

          {/* BOTÕES DESKTOP — SOMEM NO ADMIN */}
          {!isAdminPage && (
            <div className="hidden md:flex items-center gap-3">

              {/* ADMIN BUTTON */}
              <Link to="/admin-login">
                <button className="group relative flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-300 backdrop-blur-md text-white font-semibold border border-white/20 hover:bg-gradient-to-r hover:border-transparent shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden">
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  
                  
                  <ShieldCheck className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">ADMIN</span>
                </button>
              </Link>


              {/* LOGIN BUTTON */}
              <Link to="/login">
                <button className="group relative flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-300 to-blue-300 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-orange-500 hover:shadow--500/50 transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] overflow-hidden">
                  {/* Pulse effect no fundo */}
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                  <LogIn className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="relative z-10">LOGIN</span>
                </button>
              </Link>

            </div>
          )}

          {/* MENU MOBILE — SOMEM NO ADMIN */}
          {!isAdminPage && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {/* MENU MOBILE DROPDOWN */}
        {!isAdminPage && mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top duration-300">
            
            {/* ADMIN MOBILE */}
            <Link to="/admin-login" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold border border-white/20 hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600 hover:border-transparent shadow-lg transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
                ADMIN
              </button>
            </Link>

            {/* LOGIN MOBILE */}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-orange-500 transition-all duration-300">
                <LogIn className="w-5 h-5" />
                LOGIN
              </button>
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}