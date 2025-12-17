import { useState } from "react";
import CursoForm from "../components/CursoForm";

export default function Admin() {
  const [cursos, setCursos] = useState([]);
  const [cursoEditando, setCursoEditando] = useState(null);

  function salvarCurso(curso) {
    if (cursoEditando) {
      setCursos(cursos.map((c) => (c.id === curso.id ? curso : c)));
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
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-10">
          Painel Admin — Cursos
        </h1>

        {/* FORM */}
        <div className="bg-blue-100 rounded-lg p-6 mb-14 max-w-3xl mx-auto">
          <CursoForm
            salvarCurso={salvarCurso}
            cursoEditando={cursoEditando}
          />
        </div>

        {/* LISTA DE CURSOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-2xl overflow-hidden shadow
                         hover:shadow-xl transition"
            >
              {/* IMAGEM */}
              <div className="relative">
                <img
                  src={curso.imagem}
                  alt={curso.nome}
                  className="h-44 w-full object-cover"
                />

                {/* Categoria */}
                <span className="absolute top-3 left-3 bg-blue-600 text-white
                                 text-xs px-3 py-1 rounded-full">
                  {curso.categoria}
                </span>
              </div>

              {/* CONTEÚDO */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  {curso.nome}
                </h2>

                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {curso.descricao}
                </p>

                <div className="text-sm text-gray-500 mt-4 space-y-1">
                  <p>👨‍🏫 {curso.professor}</p>
                  <p>
                    📅 {curso.dataInicio} até {curso.dataFim}
                  </p>
                </div>

                {/* BOTÕES – FUNÇÕES MANTIDAS */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setCursoEditando(curso)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium
                               bg-blue-600 text-white
                               hover:bg-blue-700 transition"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => excluirCurso(curso.id)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium
                               bg-red-600 text-white
                               hover:bg-red-700 transition"
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
