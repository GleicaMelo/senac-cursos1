import { useState } from "react";
import CursoForm from "../components/CursoForm";

export default function Admin() {
  const [cursos, setCursos] = useState([]);
  const [cursoEditando, setCursoEditando] = useState(null);

  function salvarCurso(curso) {
    if (cursoEditando) {
      setCursos(
        cursos.map((c) => (c.id === curso.id ? curso : c))
      );
      setCursoEditando(null);
    } else {
      setCursos([...cursos, curso]);
    }
  }

  function excluirCurso(id) {
    setCursos(cursos.filter((c) => c.id !== id));
  }

  return (
    // ⬇️ NÃO usa h-screen / min-h-screen aqui
    <main className="bg-gray-100 px-10 py-8 min-h-[calc(100vh-96px)]">
      
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Painel Admin - Cursos
      </h1>

      <CursoForm
        salvarCurso={salvarCurso}
        cursoEditando={cursoEditando}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <img
              src={curso.imagem}
              alt={curso.nome}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />

            <h2 className="font-bold text-lg">{curso.nome}</h2>
            <p className="text-sm text-gray-600">{curso.descricao}</p>

            <p className="text-sm mt-2">👨‍🏫 {curso.professor}</p>
            <p className="text-sm">📅 {curso.data}</p>
            <p className="text-sm">🗂️ {curso.categoria}</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setCursoEditando(curso)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Editar
              </button>

              <button
                onClick={() => excluirCurso(curso.id)}
                className="text-red-600 font-semibold hover:underline"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}