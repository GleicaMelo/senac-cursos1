import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Cadastro() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/cursos/${id}`)
      .then(res => res.json())
      .then(data => setCurso(data));
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Aluno ${nome} matriculado no curso ${curso.titulo}!`);
  };

  if (!curso) return <p className="p-6">Carregando...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Matrícula - {curso.titulo}</h2>
      <img src={curso.imagem} alt={curso.titulo} className="rounded-lg mb-4" />
      <p><b>Início:</b> {curso.inicio}</p>
      <p><b>Fim:</b> {curso.fim}</p>
      <p className="mb-4"><b>Disponibilidade:</b> {curso.vagas_ocupadas < curso.vagas ? "Disponível" : "Esgotado"}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} required />
        <input className="border p-2 rounded" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} required />
        <input type="email" className="border p-2 rounded" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Confirmar matrícula</button>
      </form>
    </div>
  );
}
