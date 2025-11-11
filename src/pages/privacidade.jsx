export default function Privacidade() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-start pt-32 px-6">
      <div className="max-w-4xl text-center bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Privacidade e Proteção de Dados
        </h1>

        <p className="text-black leading-relaxed mb-6">
          O <strong>Senac Açailândia</strong> respeita a sua privacidade e se compromete
          com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de
          Proteção de Dados (LGPD – Lei nº 13.709/2018).
        </p>

        <div className="text-left text-gray-700 space-y-4">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">1. Coleta de Informações</h2>
            <p className="text-black">
              Coletamos apenas os dados necessários para o funcionamento dos nossos serviços,
              como nome, e-mail e telefone, informados no momento do cadastro ou contato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">2. Uso dos Dados</h2>
            <p className="text-black"> 
              Os dados coletados são utilizados exclusivamente para finalidades educacionais,
              administrativas e de comunicação com os alunos e parceiros, respeitando a
              confidencialidade e segurança.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">3. Compartilhamento de Dados</h2>
            <p className="text-black">
              Não compartilhamos suas informações pessoais com terceiros sem o seu
              consentimento, exceto quando exigido por lei ou para o cumprimento de
              obrigações legais e contratuais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">4. Direitos do Titular</h2>
            <p className="text-black">
              Você tem o direito de acessar, corrigir, excluir e solicitar a portabilidade
              dos seus dados pessoais. Para exercer seus direitos, entre em contato com
              nossa equipe através do e-mail:
              <br />
              <span className="text-blue-700 font-semibold">
               cepacailandia@ma.senac.br
              </span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">5. Segurança das Informações</h2>
            <p className="text-black">
              Adotamos medidas técnicas e administrativas para proteger seus dados contra
              acessos não autorizados, perdas e vazamentos, garantindo a integridade das
              informações armazenadas.
            </p>
          </section>
        </div>

        <p className="text-sm text-gray-600 mt-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
}
