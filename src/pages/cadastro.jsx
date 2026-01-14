import { useState } from "react";

export default function PreMatricula() {
  const [etapa, setEtapa] = useState(1);
  /* zod zodResolvers tansteck form */
  // Dados pessoais
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  
  // Endereço
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  
  // Informações acadêmicas
  const [escolaridade, setEscolaridade] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [anoConclusao, setAnoConclusao] = useState("");
  const [cursoInteresse, setCursoInteresse] = useState("");
  const [modalidadePreferencia, setModalidadePreferencia] = useState("");
  const [turno, setTurno] = useState("");
  
  const cursos = [
    "Desenvolvimento Web Full Stack",
    "Design Gráfico e UX/UI",
    "Marketing Digital",
    "Gestão de Projetos",
    "Análise de Dados",
    "Inglês para Negócios",
    "Excel Avançado",
    "Programação Python"
  ];

  const proximaEtapa = () => {
    if (etapa === 1) {
      if (!nome || !email || !telefone || !dataNascimento || !cpf) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
    }
    if (etapa === 2) {
      if (!cep || !endereco || !numero || !bairro || !cidade || !estado) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
    }
    if (etapa < 3) {
      setEtapa(etapa + 1);
    }
  };

  const etapaAnterior = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1);
    }
  };

  const finalizarPreMatricula = () => {
    if (!escolaridade || !cursoInteresse || !modalidadePreferencia || !turno) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert(`
✓ Pré-matrícula realizada com sucesso!

${nome}, recebemos sua solicitação para o curso:
${cursoInteresse}

Em breve nossa equipe entrará em contato através do email ${email} ou telefone ${telefone} para confirmar sua matrícula e fornecer mais informações.

Obrigado!
    `);
    
    // Resetar formulário
    setEtapa(1);
    setNome("");
    setEmail("");
    setTelefone("");
    setDataNascimento("");
    setCpf("");
    setCep("");
    setEndereco("");
    setNumero("");
    setComplemento("");
    setBairro("");
    setCidade("");
    setEstado("");
    setEscolaridade("");
    setInstituicao("");
    setAnoConclusao("");
    setCursoInteresse("");
    setModalidadePreferencia("");
    setTurno("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Pré-Matrícula
          </h1>
          <p className="text-gray-600">
            Preencha os dados abaixo e garanta sua vaga
          </p>
        </div>

        {/* Indicador de Progresso */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center gap-3 ${etapa >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${etapa >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                1
              </div>
              <span className="font-semibold hidden sm:inline">Dados Pessoais</span>
            </div>
            
            <div className={`flex-1 h-1 mx-4 ${etapa >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            
            <div className={`flex items-center gap-3 ${etapa >= 2 ? 'text-orange-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${etapa >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                2
              </div>
              <span className="font-semibold hidden sm:inline">Endereço</span>
            </div>
            
            <div className={`flex-1 h-1 mx-4 ${etapa >= 3 ? 'bg-orange-600' : 'bg-gray-300'}`}></div>
            
            <div className={`flex items-center gap-3 ${etapa >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${etapa >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                3
              </div>
              <span className="font-semibold hidden sm:inline">Curso</span>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          
          {/* ETAPA 1 - Dados Pessoais dos alunos e tals */}
          {etapa === 1 && (
            <div className="space-y-6">
              <div className="border-b-4 border-blue-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">👤</span>
                  Dados Pessoais
                </h2>
                <p className="text-gray-600 mt-1">Preencha suas informações básicas</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Nascimento <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CPF <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 2 - Endereço */}
          {etapa === 2 && (
            <div className="space-y-6">
              <div className="border-b-4 border-orange-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">📍</span>
                  Endereço
                </h2>
                <p className="text-gray-600 mt-1">Informe seu endereço completo</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CEP <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="00000-000"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Endereço <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="Rua, avenida..."
                    value={endereco}
                    onChange={e => setEndereco(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="123"
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Complemento
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="Apto, bloco... (opcional)"
                    value={complemento}
                    onChange={e => setComplemento(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bairro <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  placeholder="Nome do bairro"
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cidade <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="Sua cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option>AC</option>
                    <option>AL</option>
                    <option>AP</option>
                    <option>AM</option>
                    <option>BA</option>
                    <option>CE</option>
                    <option>DF</option>
                    <option>ES</option>
                    <option>GO</option>
                    <option>MA</option>
                    <option>MT</option>
                    <option>MS</option>
                    <option>MG</option>
                    <option>PA</option>
                    <option>PB</option>
                    <option>PR</option>
                    <option>PE</option>
                    <option>PI</option>
                    <option>RJ</option>
                    <option>RN</option>
                    <option>RS</option>
                    <option>RO</option>
                    <option>RR</option>
                    <option>SC</option>
                    <option>SP</option>
                    <option>SE</option>
                    <option>TO</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 3 - Informações Acadêmicas e Curso */}
          {etapa === 3 && (
            <div className="space-y-6">
              <div className="border-b-4 border-blue-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">🎓</span>
                  Informações Acadêmicas e Curso
                </h2>
                <p className="text-gray-600 mt-1">Escolha o curso e informe sua formação</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  Curso de Interesse
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Selecione o curso <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    value={cursoInteresse}
                    onChange={e => setCursoInteresse(e.target.value)}
                  >
                    <option value="">Escolha um curso...</option>
                    {cursos.map((curso, idx) => (
                      <option key={idx}>{curso}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Modalidade <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                      value={modalidadePreferencia}
                      onChange={e => setModalidadePreferencia(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option>Presencial</option>
                      <option>Online ao vivo</option>
                      <option>EAD (gravado)</option>
                      <option>Híbrido</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Turno <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
                      value={turno}
                      onChange={e => setTurno(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option>Manhã</option>
                      <option>Tarde</option>
                      <option>Noite</option>
                      <option>Integral</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Escolaridade <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  value={escolaridade}
                  onChange={e => setEscolaridade(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option>Ensino Fundamental</option>
                  <option>Ensino Médio Incompleto</option>
                  <option>Ensino Médio Completo</option>
                  <option>Superior Incompleto</option>
                  <option>Superior Completo</option>
                  <option>Pós-graduação</option>
                  <option>Mestrado</option>
                  <option>Doutorado</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instituição de Ensino
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="Nome da escola/universidade (opcional)"
                    value={instituicao}
                    onChange={e => setInstituicao(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ano de Conclusão
                  </label>
                  <input
                    type="number"
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="2024 (opcional)"
                    value={anoConclusao}
                    onChange={e => setAnoConclusao(e.target.value)}
                  />
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">📌 Importante:</span> Após enviar sua pré-matrícula, nossa equipe entrará em contato em até 48 horas para confirmar os dados e finalizar o processo.
                </p>
              </div>
            </div>
          )}

          {/* Botões de Navegação */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {etapa > 1 && (
              <button
                onClick={etapaAnterior}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                ← Voltar
              </button>
            )}

            {etapa < 3 ? (
              <button
                onClick={proximaEtapa}
                className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition"
              >
                Próxima Etapa →
              </button>
            ) : (
              <button
                onClick={finalizarPreMatricula}
                className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-orange-600 transition transform hover:scale-105"
              >
                ✓ Finalizar Pré-Matrícula
              </button>
            )}
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">Precisa de ajuda?</h3>
            <p className="text-gray-600 text-sm">
              Entre em contato: <span className="text-blue-600 font-semibold">(98) 3000-0000</span> | 
              <span className="text-blue-600 font-semibold"> contato@empresa.com.br</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}