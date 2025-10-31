import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white py-10 px-20 text-blue-600 p-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Senac Cursos</h1>
      <img src="/src/assets/images.png" alt="senac" className="h-9" />
      
      <div className="flex space-x-4"> {/* Adicionei uma div para agrupar e espaçar os links/botões */}
        
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
