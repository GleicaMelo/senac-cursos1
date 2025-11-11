export default function Ouvidoria() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-start pt-28 px-6">
      {/* Card principal */}
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Ouvidoria</h1>
        <p className="text-gray-600 mb-8">
          Este canal é destinado para receber suas dúvidas, sugestões, elogios ou reclamações.
          Nosso compromisso é ouvir você e aprimorar constantemente nossos serviços.
        </p>

        {/* Formulário */}
        <form className="space-y-6 text-left">
          {/* Nome */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Tipo de mensagem */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de mensagem
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">Selecione...</option>
              <option value="duvida">Dúvida</option>
              <option value="sugestao">Sugestão</option>
              <option value="elogio">Elogio</option>
              <option value="reclamacao">Reclamação</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mensagem
            </label>
            <textarea
              rows="5"
              placeholder="Digite sua mensagem aqui..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
