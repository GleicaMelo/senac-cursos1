import { Link, useLocation } from "react-router-dom";
import { LogIn, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isAdminArea =
    location.pathname.startsWith("/admin");

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/">
        <img src="/senac-logo.png" alt="Senac" className="h-10" />
      </Link>

      {!isAdminArea && (
        <div className="flex gap-3">
          <Link to="/admin-login">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-400 text-white rounded">
              <ShieldCheck className="w-4 h-4" /> ADMIN
            </button>
          </Link>

          <Link to="/login">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded">
              <LogIn className="w-4 h-4" /> LOGIN
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}