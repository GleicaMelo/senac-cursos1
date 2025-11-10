export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-start pt-20 px-6">
      {/* Título e texto principal */}
      <div className="max-w-4xl text-center mb-8">
        <h1 className="text-6xl font-bold text-blue-700 mb-6">Quem Somos</h1>
        <p className="text-black leading-relaxed">
          Somos um projeto desenvolvido no <strong>Senac Açailândia</strong>,
          criado com o propósito de promover inclusão, aprendizado e desenvolvimento
          através da tecnologia e da educação.
        </p>
        <p className="text-black leading-relaxed mt-4">
          Nosso objetivo é tornar o conhecimento acessível para todos,
          incentivando o crescimento pessoal e profissional dos participantes.
          Com criatividade, empatia e dedicação, buscamos construir experiências
          que unam inovação, responsabilidade social e transformação.
        </p>
      </div>

      {/* Seção Missão, Visão e Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full text-center">
        {/* Missão */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.senac.br/_next/image/?url=%2Fwp-content%2Fuploads%2F2024%2F10%2FCampanha-Senac-Nacional-1-e1728589603160.png&w=1920&q=75"
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Missão</h2>
          <p className="text-gray-700 leading-relaxed max-w-xs hover:text-orange-500 cursor-pointer">
            Educar para o trabalho, de forma inovadora e inclusiva, em atividades
            do Comércio de Bens, Serviços e Turismo.
          </p>
        </div>

        {/* Visão */}
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEa64osO5fEmScRVjQ7Y-ghp5gOBu7gm8bQ&s"
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Visão</h2>
          <p className="text-gray-700 leading-relaxed max-w-xs hover:text-orange-500 cursor-pointer">
            Transformar vidas e fortalecer o setor do Comércio de Bens,
            Serviços e Turismo da nossa região.
          </p>
        </div>

        {/* Valores */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.senac.br/_next/image/?url=%2Fwp-content%2Fuploads%2F2024%2F10%2FDiversidade.png&w=1920&q=75"
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Valores</h2>
          <p className="text-gray-700 leading-relaxed max-w-xs hover:text-orange-500 cursor-pointer">
            Ética e Transparência;<br />
            Diversidade;<br />
            Inovação;<br />
            Sustentabilidade;<br />
            Transformação Social.
          </p>
        </div>
      </div>
    </div>
  );
}
