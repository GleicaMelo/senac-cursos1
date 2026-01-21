import React from 'react';
import { Shield, Database, Lock, Users, FileText, Mail } from 'lucide-react';

export default function Privacidade() {
  const sections = [
    {
      icon: Database,
      title: "1. Coleta de Informações",
      content:
        "Coletamos apenas os dados necessários para o funcionamento dos nossos serviços, como nome, e-mail e telefone, informados no momento do cadastro ou contato.",
      color: "blue",
    },
    {
      icon: FileText,
      title: "2. Uso dos Dados",
      content:
        "Os dados coletados são utilizados exclusivamente para finalidades educacionais, administrativas e de comunicação com os alunos e parceiros, respeitando a confidencialidade e segurança.",
      color: "orange",
    },
    {
      icon: Users,
      title: "3. Compartilhamento de Dados",
      content:
        "Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, exceto quando exigido por lei ou para o cumprimento de obrigações legais e contratuais.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "4. Direitos do Titular",
      content:
        "Você tem o direito de acessar, corrigir, excluir e solicitar a portabilidade dos seus dados pessoais.",
      email: "cepacailandia@ma.senac.br",
      color: "orange",
    },
    {
      icon: Lock,
      title: "5. Segurança das Informações",
      content:
        "Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perdas e vazamentos, garantindo a integridade das informações armazenadas.",
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Privacidade e Proteção de Dados
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-orange-300">

          {/* Introdução */}
          <div className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              O <span className="font-bold text-blue-600">Senac Açailândia</span>{' '}
              respeita a sua privacidade e se compromete com a proteção dos seus
              dados pessoais, em conformidade com a{' '}
              <span className="font-semibold text-orange-600">
                Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)
              </span>.
            </p>
          </div>

          {/* Seções */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isBlue = section.color === "blue";

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-l-4 ${
                    isBlue
                      ? 'bg-blue-50 border-blue-400 hover:bg-blue-100'
                      : 'bg-orange-50 border-orange-400 hover:bg-orange-100'
                  } transition-all hover:shadow-md`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isBlue ? 'bg-blue-100' : 'bg-orange-100'
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          isBlue ? 'text-blue-600' : 'text-orange-600'
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h2
                        className={`text-xl font-semibold mb-3 ${
                          isBlue ? 'text-blue-700' : 'text-orange-700'
                        }`}
                      >
                        {section.title}
                      </h2>

                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>

                      {section.email && (
                        <div className="mt-4 p-4 bg-white rounded-lg border-2 border-orange-200">
                          <p className="text-gray-700 mb-2">
                            Para exercer seus direitos, entre em contato com nossa equipe:
                          </p>
                          <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-orange-500" />
                            <a
                              href={`mailto:${section.email}`}
                              className="text-blue-600 font-semibold hover:text-orange-500 transition-colors"
                            >
                              {section.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Informações Importantes */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center border-2 border-blue-100">
              <Database className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-700 mb-2">Dados Seguros</h3>
              <p className="text-sm text-gray-600">Seus dados são protegidos</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 text-center border-2 border-orange-100">
              <Shield className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-orange-700 mb-2">Conformidade LGPD</h3>
              <p className="text-sm text-gray-600">Seguimos a legislação</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center border-2 border-blue-100">
              <Lock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-700 mb-2">Transparência</h3>
              <p className="text-sm text-gray-600">Comunicação clara</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl p-6">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-blue-700">
                Última atualização:
              </span>{' '}
              {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}