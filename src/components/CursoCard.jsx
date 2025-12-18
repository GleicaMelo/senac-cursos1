import { Link } from "react-router-dom";

export default function CursoCard({ curso }) {
  const disponivel = curso.vagas_ocupadas < curso.vagas;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col">
      
      <img
        src={curso.imagem}
        alt={curso.titulo}
        className="rounded-xl h-40 w-full object-cover"
      />

      <h2 className="text-lg font-semibold mt-3 text-blue-900">
        {curso.titulo}
      </h2>

      <p className="text-gray-500 text-sm">{curso.categoria}</p>

      <p className="text-gray-700 mt-2 text-sm line-clamp-3">
        {curso.descricao}
      </p>

      {/* TAGS (modalidade + carga horária) */}
      <div className="flex flex-wrap gap-2 mt-3">
        {curso.modalidade && (
          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
            {curso.modalidade}
          </span>
        )}
        {curso.horas && (
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
            {curso.horas}h
          </span>
        )}
      </div>

      {/* INFO EXTRA (modelo SENAC) */}
      <div className="text-sm text-gray-600 mt-3 space-y-1">
        {curso.duracao && (
          <p><b>Duração:</b> {curso.duracao}</p>
        )}
        {curso.preRequisitos && (
          <p><b>Pré-requisito:</b> {curso.preRequisitos}</p>
        )}
        {curso.certificacao && (
          <p><b>Certificação:</b> {curso.certificacao}</p>
        )}
      </div>

      {/* DATAS */}
      <div className="text-sm mt-3 text-gray-700">
        <p><b>Início:</b> {curso.inicio}</p>
        <p><b>Fim:</b> {curso.fim}</p>
      </div>

      {/* STATUS */}
      <p className="mt-3">
        <span
          className={`px-3 py-1 rounded-full text-sm inline-block ${
            disponivel
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {disponivel ? "Disponível" : "Vagas Esgotadas"}
        </span>
      </p>

      {/* PREÇO */}
      <p className="text-blue-700 font-bold mt-3 text-lg">
        R$ {curso.preco}
      </p>

      {/* BOTÃO */}
      <Link to={`/cadastro/${curso.id}`} className="mt-auto">
        <button
          disabled={!disponivel}
          className={`mt-4 w-full py-2 rounded-lg font-semibold transition ${
            disponivel
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Matricular
        </button>
      </Link>
    </div>
  );
}
