export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-start pt-28 px-6">
      {/* Card principal */}
      <div className="bg-white shadow-lg rounded-2xl max-w-5xl w-full p-10 text-center">
        <h1 className="text-6xl font-bold text-blue-700 mb-6">Quem Somos</h1>

        <p className="text-gray-700 leading-relaxed mb-4 ">
          Somos um projeto desenvolvido no <strong>Senac Açailândia</strong>,
          criado com o propósito de promover inclusão, aprendizado e desenvolvimento
          através da tecnologia e da educação.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Nosso objetivo é tornar o conhecimento acessível para todos,
          incentivando o crescimento pessoal e profissional dos participantes.
          Com criatividade, empatia e dedicação, buscamos construir experiências
          que unam inovação, responsabilidade social e transformação.
        </p>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Missão */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="https://www.senac.br/_next/image/?url=%2Fwp-content%2Fuploads%2F2024%2F10%2FCampanha-Senac-Nacional-1-e1728589603160.png&w=1920&q=75"
              className="w-32 h-32 mx-auto object-cover rounded-full shadow mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Missão</h2>
            <p className="text-gray-700 leading-relaxed hover:text-orange-600 cursor-pointer">
              Educar para o trabalho, de forma inovadora e inclusiva, em atividades
              do Comércio de Bens, Serviços e Turismo.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEa64osO5fEmScRVjQ7Y-ghp5gOBu7gm8bQ&s"
              className="w-32 h-32 mx-auto object-cover rounded-full shadow mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Visão</h2>
            <p className="text-gray-700 leading-relaxed hover:text-orange-600 cursor-pointer">
              Transformar vidas e fortalecer o setor do Comércio de Bens,
              Serviços e Turismo da nossa região.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="https://www.senac.br/_next/image/?url=%2Fwp-content%2Fuploads%2F2024%2F10%2FDiversidade.png&w=1920&q=75"
              className="w-32 h-32 mx-auto object-cover rounded-full shadow mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Valores</h2>
            <p className="text-gray-700 leading-relaxed hover:text-orange-600 cursor-pointer">
              Ética e Transparência;<br />
              Diversidade;<br />
              Inovação;<br />
              Sustentabilidade;<br />
              Transformação Social.
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <p className="text-gray-500 text-sm mt-10">
          Última atualização: 11/11/2025
        </p>
      </div>
    </div>
  );
}
