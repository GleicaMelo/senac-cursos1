import React, { useState } from 'react';
import { MessageSquare, User, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function Ouvidoria() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <MessageSquare className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Ouvidoria</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-orange-300">
          
          {/* Descrição */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
            <p className="text-gray-700 text-center leading-relaxed">
              Este canal é destinado para receber suas dúvidas, sugestões, elogios ou reclamações.
              Nosso compromisso é <span className="font-semibold text-blue-600">ouvir você</span> e 
              <span className="font-semibold text-orange-600"> aprimorar constantemente</span> nossos serviços.
            </p>
          </div>

          {/* Formulário */}
          <div className="space-y-6">
            
            {/* Nome */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 text-blue-500" />
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="w-full p-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition hover:border-blue-200"
              />
            </div>

            {/* E-mail */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Mail className="w-4 h-4 text-blue-500" />
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                className="w-full p-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition hover:border-blue-200"
              />
            </div>

            {/* Tipo de mensagem */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                Tipo de mensagem
              </label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full p-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition hover:border-blue-200 bg-white"
              >
                <option value="">Selecione...</option>
                <option value="duvida">💭 Dúvida</option>
                <option value="sugestao">💡 Sugestão</option>
                <option value="elogio">⭐ Elogio</option>
                <option value="reclamacao">⚠️ Reclamação</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                placeholder="Digite sua mensagem aqui..."
                className="w-full p-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition resize-none hover:border-blue-200"
              />
            </div>

            {/* Botão */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Feedback de envio */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <p className="text-green-700 font-medium text-center">
                ✓ Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
              </p>
            </div>
          )}
        </div>

        {/* Informações adicionais */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-300 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Resposta Rápida</h3>
            <p className="text-sm text-gray-600">Retornamos em até 48h úteis</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-orange-300 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-orange-700 mb-2">Confidencial</h3>
            <p className="text-sm text-gray-600">Seus dados estão seguros</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-300 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Atendimento</h3>
            <p className="text-sm text-gray-600">Equipe dedicada a você</p>
          </div>
        </div>

      </div>
    </div>
  );
}
