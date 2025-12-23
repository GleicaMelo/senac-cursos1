import { Link } from "react-router-dom";
import { Calendar, Clock, Award, CheckCircle, XCircle, BookOpen, Users } from "lucide-react";

export default function CursoCard({ curso }) {
  const disponivel = curso.vagas_ocupadas < curso.vagas;
  const percentualOcupado = ((curso.vagas_ocupadas / curso.vagas) * 100).toFixed(0);

  return (
    <div className="group relative bg-gradient-to-br from-white via-white to-white rounded-2xl overflow-hidden border border-orange-400 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
      
      {/* Efeito de brilho no fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-orange-500/8 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Badge de status flutuante */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border transition-all duration-300 ${
            disponivel
              ? "bg-green-500/20 text-green-600 border-green-500/30 group-hover:shadow-lg group-hover:shadow-green-500/30"
              : "bg-red-500/20 text-red-300 border-red-500/30"
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

      <div className="p-5 flex flex-col h-full relative z-10">
        
        {/* Imagem com overlay gradiente */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={curso.imagem}
            alt={curso.titulo}
            className="rounded-xl h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          {/* Categoria flutuante na imagem */}
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/30 backdrop-blur-md text-white border border-white/20">
              {curso.categoria}
            </span>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold mt-4 text-blue-600 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
          {curso.titulo}
        </h2>

        {/* Descrição */}
        <p className="text-gray-400 mt-2 text-sm line-clamp-3 leading-relaxed">
          {curso.descricao}
        </p>

        {/* Tags de modalidade e carga horária */}
        <div className="flex flex-wrap gap-2 mt-4">
          {curso.modalidade && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-gray-500 text-white border border-purple-500/30 backdrop-blur-sm">
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

        {/* Barra de progresso de vagas */}
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
            ></div>
          </div>
        </div>

        {/* Informações em grid */}
        <div className="mt-4 space-y-2 text-sm">
          {curso.duracao && (
            <div className="flex items-start gap-2 text-gray-400">
              <Clock className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
              <div>
                <span className="text-gray-400">Duração:</span>
                <span className="ml-1 font-medium">{curso.duracao}</span>
              </div>
            </div>
          )}
          {curso.certificacao && (
            <div className="flex items-start gap-2 text-gray-300">
              <Award className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
              <div>
                <span className="text-gray-400">Certificação:</span>
                <span className="ml-1 font-medium">{curso.certificacao}</span>
              </div>
            </div>
          )}
        </div>

        {/* Pré-requisitos em destaque */}
        {curso.preRequisitos && (
          <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-xs text-gray-400 mb-1">Pré-requisito</p>
            <p className="text-sm text-gray-200">{curso.preRequisitos}</p>
          </div>
        )}

        {/* Datas */}
        <div className="mt-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Calendar className="w-4 h-4 text-green-500" />
            <span className="text-gray-500 text-xs">Início:</span>
            <span className="font-medium">{curso.inicio}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Calendar className="w-4 h-4 text-red-400" />
            <span className="text-gray-500 text-xs">Fim:</span>
            <span className="font-medium">{curso.fim}</span>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-4 border-t border-white/50"></div>

        {/* Preço e Botão */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-400">Investimento</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                R$ {curso.preco}
              </p>
            </div>
          </div>

          {/* Botão de Matrícula */}
          <Link to={`/cadastro/${curso.id}`} className="block">
            <button
              disabled={!disponivel}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform ${
                disponivel
                  ? "bg-gradient-to-r from-orange-400 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-white/80 text-white cursor-not-allowed border border-white/10"
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