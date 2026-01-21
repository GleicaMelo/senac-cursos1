import React from 'react';
import { Users, Target, Eye, Heart, Lightbulb, Shield } from 'lucide-react';

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-5xl font-bold text-blue-700 mb-4">Quem Somos</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border-t-4 border-orange-300">
          
          {/* Apresentação */}
          <div className="space-y-6 mb-10">
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Somos um projeto desenvolvido no <span className="font-bold text-blue-600">Senac Açailândia</span>,
              criado com o propósito de promover <span className="font-semibold text-orange-600">inclusão, aprendizado e desenvolvimento</span> através da tecnologia e da educação.
            </p>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                Nosso objetivo é tornar o conhecimento acessível para todos,
                incentivando o crescimento pessoal e profissional dos participantes.
                Com <span className="font-semibold text-blue-600">criatividade, empatia e dedicação</span>, buscamos construir experiências
                que unam inovação, responsabilidade social e transformação.
              </p>
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Missão</h2>
              <p className="text-gray-700 leading-relaxed text-center hover:text-orange-600 transition-colors">
                Educar para o trabalho, de forma inovadora e inclusiva, em atividades
                do Comércio de Bens, Serviços e Turismo.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-orange-100 hover:border-orange-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                  <Eye className="w-12 h-12 text-orange-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-orange-700 mb-4 text-center">Visão</h2>
              <p className="text-gray-700 leading-relaxed text-center hover:text-blue-600 transition-colors">
                Transformar vidas e fortalecer o setor do Comércio de Bens,
                Serviços e Turismo da nossa região.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Valores</h2>
              <div className="space-y-2 text-gray-700 text-center">
                <p className="hover:text-orange-600 transition-colors cursor-pointer">✓ Ética e Transparência</p>
                <p className="hover:text-orange-600 transition-colors cursor-pointer">✓ Diversidade</p>
                <p className="hover:text-orange-600 transition-colors cursor-pointer">✓ Inovação</p>
                <p className="hover:text-orange-600 transition-colors cursor-pointer">✓ Sustentabilidade</p>
                <p className="hover:text-orange-600 transition-colors cursor-pointer">✓ Transformação Social</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de Destaque */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-300 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Inovação</h3>
            <p className="text-sm text-gray-600">Tecnologia a serviço da educação</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-orange-300 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-orange-700 mb-2">Inclusão</h3>
            <p className="text-sm text-gray-600">Conhecimento para todos</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-300 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Compromisso</h3>
            <p className="text-sm text-gray-600">Excelência em cada ação</p>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl p-6">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-blue-700">Última atualização:</span> 11/11/2025
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}