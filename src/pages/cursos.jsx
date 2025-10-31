import { useEffect, useState } from "react";
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
// background da Gleica
  return (
    <div className="min-h-screen bg-blue-100 p-6 md:p-10">
      {/* 🧭 Cabeçalho */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 drop-shadow-sm">
          Cursos 
        </h1>
        <p className="text-gray-600 mt-2">
          Explore nossos cursos e invista no seu futuro profissional
        </p>
      </header>

      {/* 🔍 Barra de busca e filtro */}
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

      {/* 📞 Rodapé */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Senac Cursos — Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
