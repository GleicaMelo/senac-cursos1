import React from 'react';
import { MapPin, Building2, Users, Phone, Mail } from 'lucide-react';

export default function OndeEstamos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Onde Estamos</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-orange-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                Senac Açailândia – Maranhão
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Estamos localizados no <span className="font-semibold text-blue-600">Senac Açailândia – Maranhão</span>,
                uma unidade de ensino reconhecida pela excelência em capacitação profissional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-lg">
                Nosso espaço é moderno, acessível e acolhedor, preparado para receber alunos,
                parceiros e visitantes que compartilham da mesma vontade de aprender e evoluir.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Informações */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Endereço */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Endereço</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Rua Exemplo, 123<br />
              Centro, Açailândia - MA<br />
              CEP: 65930-000
            </p>
          </div>

          {/* Contato */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-orange-700">Contato</h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>(99) 9999-9999</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>contato@senac-acailandia.edu.br</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mapa (Placeholder) */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-100">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 p-4">
            <h3 className="text-white font-semibold text-lg text-center">Nossa Localização</h3>
          </div>
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-600">Mapa interativo</p>
              <p className="text-sm text-gray-500">Integre aqui seu mapa do Google Maps</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Venha nos visitar!</h3>
            <p className="text-gray-700 mb-6">
              Estamos de portas abertas para receber você. Conheça nossa estrutura e
              descubra as oportunidades que preparamos para seu desenvolvimento.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Agendar Visita
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

