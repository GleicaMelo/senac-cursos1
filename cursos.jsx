import { useEffect, useState } from "react";
import CursoCard from "../components/CursoCard";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  useEffect(() => {
    fetch("http://localhost:5000/cursos")
      .then(res => res.json())
      .then(data => setCursos(data));
  }, []);

  const filtrados = cursos.filter(curso => {
    const nomeMatch = curso.titulo.toLowerCase().includes(busca.toLowerCase());
    const catMatch = categoria === "Todos" || curso.categoria === categoria;
    return nomeMatch && catMatch;
  });

  const categoriasUnicas = ["Todos", ...new Set(cursos.map(c => c.categoria))];

  return (
    <div className="bg-blue-200 p-6">
      {/* 🔝 Barra de controle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        {/* 🔍 Campo de pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar curso..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="bg-white border p-2 rounded-md w-full md:w-1/2"
        />

        <select
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
          className="bg-white border p-2 rounded-md"
        >
          {categoriasUnicas.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

      </div>

      {filtrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filtrados.map(curso => (
            <CursoCard key={curso.id} curso={curso} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">Nenhum curso encontrado.</p>
      )}
    </div>
  );
}
