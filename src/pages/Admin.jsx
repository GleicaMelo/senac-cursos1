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
    <main className="bg-blue-100 min-h-[calc(100vh-96px)] py-10">
      
      {/* CONTAINER CENTRAL */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TÍTULO CENTRALIZADO */}
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-10">
          Painel Admin — Cursos
        </h1>

        {/* FORM CENTRALIZADO */}
        <div className="bg-blue-100 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
          <CursoForm
            salvarCurso={salvarCurso}
            cursoEditando={cursoEditando}
          />
        </div>

        {/* LISTA DE CURSOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <img
                src={curso.imagem}
                alt={curso.nome}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {curso.nome}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {curso.descricao}
                </p>

                <div className="text-sm text-gray-500 mt-3 space-y-1">
                  <p>👨‍🏫 {curso.professor}</p>
                  <p>📅 {curso.data}</p>
                  <p>🗂️ {curso.categoria}</p>
                </div>

                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => setCursoEditando(curso)}
                    className="px-4 py-2 text-sm border border-blue-600
                               text-blue-600 rounded-md hover:bg-blue-50 transition"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => excluirCurso(curso.id)}
                    className="px-4 py-2 text-sm border border-red-600
                               text-red-600 rounded-md hover:bg-red-50 transition"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
