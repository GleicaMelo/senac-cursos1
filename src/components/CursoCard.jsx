import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  BookOpen,
  Users,
} from "lucide-react";

export default function CursoCard({ curso }) {
  const disponivel = curso.vagas_ocupadas < curso.vagas;
  const percentualOcupado = (
    (curso.vagas_ocupadas / curso.vagas) *
    100
  ).toFixed(0);

  return (
    <div className="group relative bg-gradient-to-br from-white via-white to-white rounded-2xl overflow-hidden border border-orange-400 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
      
      {/* Efeito de brilho no fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-orange-500/8 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-5 flex flex-col h-full relative z-10">
        
        {/* IMAGEM */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={curso.imagem}
            alt={curso.titulo}
            className="rounded-xl h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

          {/* DISPONÍVEL / ESGOTADO */}
          <div className="absolute top-3 right-3 z-20">
            <span
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border shadow-lg shadow-black/30 ${
                disponivel
                  ? "bg-green-200 text-green-500 border-green-400 group-hover:shadow-lg group-hover:shadow-green-500/30"
                  : "bg-red-500/80 text-white border-red-400"
              }`}
            >
              {disponivel ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  Disponível
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5" />
                  Esgotado
                </>
              )}
            </span>
          </div>

          {/* Categoria */}
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/30 backdrop-blur-md text-white border border-white/20">
              {curso.categoria}
            </span>
          </div>
        </div>

        {/* TÍTULO */}
        <h2 className="text-xl font-bold mt-4 text-blue-600 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
          {curso.titulo}
        </h2>

        {/* DESCRIÇÃO */}
        <p className="text-gray-400 mt-2 text-sm line-clamp-3 leading-relaxed">
          {curso.descricao}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-4">
          {curso.modalidade && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-blue-100 text-white border border-purple-500/30 backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" />
              {curso.modalidade}
            </span>
          )}
          {curso.horas && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-blue-500/20 text-blue-500 border border-blue-500/30 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5" />
              {curso.horas}h
            </span>
          )}
        </div>

        {/* VAGAS */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              Vagas
            </span>
            <span className="font-medium">
              {curso.vagas_ocupadas}/{curso.vagas}
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                percentualOcupado < 50
                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                  : percentualOcupado < 80
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                  : "bg-gradient-to-r from-red-500 to-pink-500"
              }`}
              style={{ width: `${percentualOcupado}%` }}
            />
          </div>
        </div>

        {/* INFO */}
        <div className="mt-4 space-y-2 text-sm">
          {curso.duracao && (
            <div className="flex items-start gap-2 text-gray-400">
              <Clock className="w-4 h-4 mt-0.5 text-purple-400" />
              <span>
                Duração: <strong>{curso.duracao}</strong>
              </span>
            </div>
          )}
          {curso.certificacao && (
            <div className="flex items-start gap-2 text-gray-300">
              <Award className="w-4 h-4 mt-0.5 text-blue-400" />
              <span>
                Certificação: <strong>{curso.certificacao}</strong>
              </span>
            </div>
          )}
        </div>

        {/* DIVISOR */}
        <div className="my-4 border-t border-white/5"></div>

        {/* PREÇO + BOTÃO */}
        <div className="mt-auto">
          <p className="text-xs text-gray-400">Investimento</p>
          <p className="text-2xl font-bold text-blue-600 mb-3">
            R$ {curso.preco}
          </p>

          <Link to={`/cadastro/${curso.id}`}>
            <button
              disabled={!disponivel}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                disponivel
                  ? "bg-gradient-to-r from-orange-400 to-blue-600 text-white hover:scale-[1.02]"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              {disponivel ? "Matricular Agora" : "Vagas Esgotadas"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}