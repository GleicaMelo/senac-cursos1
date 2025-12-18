import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Cadastro() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [escolaridade, setEscolaridade] = useState(null);

  const [formaPagamento, setFormaPagamento] = useState("");
  const [parcelas, setParcelas] = useState("1x sem juros");

  useEffect(() => {
    fetch(`http://localhost:5000/cursos/${id}`)
      .then(res => res.json())
      .then(data => setCurso(data))
      .catch(() => alert("Erro ao carregar curso"));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!escolaridade) {
      alert("Envie o certificado ou declaração de escolaridade.");
      return;
    }

    alert(`
Matrícula confirmada!

Aluno: ${nome}
Curso: ${curso.titulo}
Pagamento: ${formaPagamento} - ${parcelas}
    `);
  };

  if (!curso) {
    return <p className="p-6 text-center">Carregando...</p>;
  }

  const disponivel = curso.vagas_ocupadas < curso.vagas;

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">

        {/* IMAGEM DO CURSO */}
        <img
          src={curso.imagem}
          alt={curso.titulo}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">

          {/* TÍTULO */}
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            {curso.titulo}
          </h1>

          <p className="text-gray-700 mb-6">
            {curso.descricao}
          </p>

          {/* INFORMAÇÕES DO CURSO — COLUNA ÚNICA */}
          <div className="border rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-blue-700 mb-3">
              Informações do curso
            </h2>

            <div className="text-sm text-gray-700 space-y-2">
              <p><b>Modalidade:</b> {curso.modalidade}</p>
              <p><b>Carga horária:</b> {curso.horas}h</p>
              <p><b>Duração:</b> {curso.duracao}</p>
              <p><b>Início:</b> {curso.inicio}</p>
              <p><b>Fim:</b> {curso.fim}</p>
              <p>
                <b>Status:</b>{" "}
                {disponivel ? "Disponível" : "Vagas esgotadas"}
              </p>
            </div>
          </div>

          {/* PRÉ-REQUISITOS */}
          {(curso.preRequisitos || curso.certificacao) && (
            <div className="border rounded-lg p-4 mb-6">
              <h2 className="font-semibold text-blue-700 mb-3">
                Pré-requisitos e certificação
              </h2>

              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {curso.preRequisitos && (
                  <li>{curso.preRequisitos}</li>
                )}
                {curso.certificacao && (
                  <li>{curso.certificacao}</li>
                )}
              </ul>
            </div>
          )}

          {/* DOCUMENTOS */}
          <div className="border rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-blue-700 mb-3">
              Documentos obrigatórios
            </h2>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Documento de identidade (RG)</li>
              <li>Certificado ou declaração de escolaridade</li>
            </ul>
          </div>

          {/* INVESTIMENTO */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="font-semibold text-blue-700 mb-3">
              Investimento
            </h2>

            <p className="text-xl font-bold text-blue-700 mb-1">
              R$ {curso.preco}
            </p>

            <p className="text-sm text-gray-600">
              Parcelamento em até 12x sem juros
            </p>
          </div>

          {/* FORMULÁRIO */}
          <h2 className="text-xl font-bold mb-4">
            Dados para matrícula
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <input
              className="border p-2 rounded"
              placeholder="Nome completo"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />

            <input
              className="border p-2 rounded"
              placeholder="CPF"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              required
            />

            <input
              className="border p-2 rounded"
              placeholder="RG"
              value={rg}
              onChange={e => setRg(e.target.value)}
              required
            />

            <input
              type="email"
              className="border p-2 rounded"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            {/* ESCOLARIDADE */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Certificado / Declaração de Escolaridade
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={e => setEscolaridade(e.target.files[0])}
                className="border p-2 rounded w-full"
                required
              />
            </div>

            {/* PAGAMENTO */}
            <select
              className="border p-2 rounded"
              value={formaPagamento}
              onChange={e => setFormaPagamento(e.target.value)}
              required
            >
              <option value="">Forma de pagamento</option>
              <option>Mastercard</option>
              <option>Visa</option>
              <option>Credishop</option>
              <option>Elo</option>
              <option>Diners Club</option>
              <option>Hipercard</option>
              <option>Redeshop</option>
            </select>

            <select
              className="border p-2 rounded"
              value={parcelas}
              onChange={e => setParcelas(e.target.value)}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i}>
                  {i + 1}x sem juros
                </option>
              ))}
            </select>

            <button
              disabled={!disponivel}
              className={`p-3 rounded mt-4 font-semibold transition ${
                disponivel
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Confirmar matrícula
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
