import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CursoCard from "../components/CursoCard";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  useEffect(() => {
    fetch("http://localhost:5000/cursos")
      .then((res) => res.json())
      .then((data) => setCursos(data))
      .catch((err) => console.error("Erro ao carregar cursos:", err));
  }, []);

  // 🔍 Filtra por busca e categoria
  const filtrados = cursos.filter((curso) => {
    const nomeMatch = curso.titulo.toLowerCase().includes(busca.toLowerCase());
    const catMatch = categoria === "Todos" || curso.categoria === categoria;
    return nomeMatch && catMatch;
  });

  // 🔽 Extrai categorias únicas
  const categoriasUnicas = ["Todos", ...new Set(cursos.map((c) => c.categoria))];

  return (
    <>

      <div className="h-full bg-gradient-to-br from-blue-200 via-orange-200 to-blue-200 p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <main className="flex-grow p-6 md:p-10">
          {/* 🧭 Cabeçalho */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 drop-shadow-sm">
              Cursos
            </h1>
            <p className="text-gray-600 mt-2">
              Explore nossos cursos e invista no seu futuro profissional
            </p>
          </header>

          {/* 🔎 Barra de busca e filtro */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <input
              type="text"
              placeholder="Pesquisar curso..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="bg-white border border-gray-300 p-3 rounded-xl w-full md:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="bg-white border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition w-full md:w-1/4"
            >
              {categoriasUnicas.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* 🧱 Grade de cursos */}
          {filtrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtrados.map((curso) => (
                <CursoCard key={curso.id} curso={curso} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-16 text-lg">
              Nenhum curso encontrado 😕
            </p>
          )}
        </main>

        {/* 🦶 Rodapé */}

      </div>
      <footer className="bg-white w-full py-10 px-4 text-center shadow-inner border-t border-blue-400">
        {/* Nome e Ícones centralizados */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">Senac</h3>
        </div>

        {/* Seções de conteúdo */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
          {/* Sobre nós */}
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Sobre nós</h4>
            <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
              <li>
                <Link to="/QuemSomos" className="hover:text-orange-500 block">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link to="/OndeEstamos" className="hover:text-orange-500 block">
                  Onde estamos
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-orange-500 block">
                  Privacidade e Proteção de Dados
                </Link>
              </li>
              <li>
                <Link to="/ouvidoria" className="hover:text-orange-500 block">
                  Ouvidoria
                </Link>
              </li>




            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Cursos</h4>
            <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  Presencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  EAD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  Programa de Gratuidade (PSG)
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Serviços</h4>
            <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  Restaurante Senac
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  Banco de Oportunidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  Biblioteca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block">
                  Licitações
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H8.09v-2.89h2.35V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.17 0-1.53.73-1.53 1.48v1.77h2.6l-.42 2.89h-2.18v6.99C18.34 21.12 22 17 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/cursossenacacailandia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-pink-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/559992120154"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-green-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 5.98L0 24l6.24-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22c-1.89 0-3.73-.53-5.32-1.54l-.38-.24-3.7.96.99-3.58-.25-.4A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10z" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:contato@senac.com" className="text-blue-700 hover:text-red-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 13.065 2.4 6h19.2L12 13.065zM22 8.335V18H2V8.335l10 7.13 10-7.13z" />
            </svg>
          </a>
        </div>

        {/* Endereço e direitos autorais */}
        <div className="pt-4">
          <p className="text-sm text-gray-700">
            Endereço: Avenida Contorno — Açailândia/MA
          </p>
          <p className="text-sm text-gray-700">
            Telefone: (99) 4002-8922 | E-mail: contato@senac.com
          </p>
          <p className="text-xs text-gray-500 mt-3">
            © {new Date().getFullYear()} Filype Galvão e Gleica Melo — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>


  );
}
