import { Link } from "react-router-dom";
// card das imagens
export default function CursoCard({ curso }) {
  const disponivel = curso.vagas_ocupadas < curso.vagas;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4">
      <img src={curso.imagem} alt={curso.titulo} className="rounded-xl" />
      <h2 className="text-lg font-semibold mt-2">{curso.titulo}</h2>
      <p className="text-gray-600 text-sm">{curso.categoria}</p>
      <p className="text-gray-700 mt-2 text-sm">{curso.descricao}</p>
      <div className="text-sm mt-2">
        <p><b>Início:</b> {curso.inicio}</p>
        <p><b>Fim:</b> {curso.fim}</p>
        <p><b>Horas:</b> {curso.horas}h</p>
      </div>
      <p className={`mt-2 font-semibold ${disponivel ? "text-green-600" : "text-red-500"}`}>
        {disponivel ? "Disponível" : "Vagas Esgotadas"}
      </p>
      <p className="text-blue-700 font-bold mt-2">R$ {curso.preco}</p>

      <Link to={`/cadastro/${curso.id}`}>
        <button
          disabled={!disponivel}
          className={`mt-3 w-full py-2 rounded-lg font-semibold ${
            disponivel ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Matricular
        </button>
      </Link>
    </div>
  );
}
