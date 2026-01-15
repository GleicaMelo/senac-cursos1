import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Image,
  User,
  Calendar,
  Tag,
  FileText,
  ArrowLeft,
} from "lucide-react";

export default function CursoForm({ salvarCurso, cursoEditando }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    categoria: "",
    professor: "",
    dataInicio: "",
    dataFim: "",
  });

  useEffect(() => {
    if (cursoEditando) setForm(cursoEditando);
  }, [cursoEditando]);

  function submit(e) {
    e.preventDefault();

    if (new Date(form.dataFim) < new Date(form.dataInicio)) {
      alert("A data final não pode ser menor que a data inicial.");
      return;
    }

    salvarCurso({
      ...form,
      id: cursoEditando ? form.id : Date.now(),
    });

    setForm({
      nome: "",
      descricao: "",
      imagem: "",
      categoria: "",
      professor: "",
      dataInicio: "",
      dataFim: "",
    });

    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-100 flex items-center justify-center p-4 relative">

      {/* BOTÃO VOLTAR */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-xl
                   bg-orange-200/70 backdrop-blur-md border border-blue-200
                   text-blue-800 font-semibold shadow-lg hover:shadow-orange-400/40
                   hover:text-orange-600 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft size={18} />
        Voltar para o início
      </button>

      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full space-y-6 border border-gray-100"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {cursoEditando ? "Editar Curso" : "Novo Curso"}
          </h2>
          <p className="text-gray-500">Preencha os dados do curso abaixo</p>
        </div>

        {/* Nome */}
        <div>
          <label className="block text-sm font-semibold mb-2">Nome do Curso</label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full border-2 pl-12 py-3 rounded-lg focus:border-orange-400 outline-none"
              required
            />
          </div>
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-sm font-semibold mb-2">Descrição</label>
          <div className="relative">
            <FileText className="absolute left-3 top-4 text-gray-400" />
            <textarea
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              className="w-full border-2 pl-12 py-3 rounded-lg min-h-32 resize-none focus:border-orange-400 outline-none"
              required
            />
          </div>
        </div>

        {/* Imagem */}
        <div>
          <label className="block text-sm font-semibold mb-2">URL da Imagem</label>
          <div className="relative">
            <Image className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={form.imagem}
              onChange={(e) => setForm({ ...form, imagem: e.target.value })}
              className="w-full border-2 pl-12 py-3 rounded-lg focus:border-orange-400 outline-none"
            />
          </div>

          {form.imagem && (
            <img
              src={form.imagem}
              alt="Preview"
              className="mt-3 w-full h-48 object-cover rounded-lg border"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
        </div>

        {/* Categoria e Professor */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Categoria</label>
            <select
              value={form.categoria}
              onChange={(e) => setForm({ ...form, categoria: e.target.value })}
              className="w-full border-2 py-3 rounded-lg px-4"
              required
            >
              <option value="">Selecione...</option>
              <option>Administração</option>
              <option>Beleza</option>
              <option>Educação</option>
              <option>Saúde</option>
              <option>TI</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Professor</label>
            <input
              value={form.professor}
              onChange={(e) => setForm({ ...form, professor: e.target.value })}
              className="w-full border-2 py-3 rounded-lg px-4"
              required
            />
          </div>
        </div>

        {/* Datas */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="date"
            value={form.dataInicio}
            onChange={(e) => setForm({ ...form, dataInicio: e.target.value })}
            className="border-2 py-3 rounded-lg px-4"
            required
          />
          <input
            type="date"
            value={form.dataFim}
            min={form.dataInicio}
            onChange={(e) => setForm({ ...form, dataFim: e.target.value })}
            className="border-2 py-3 rounded-lg px-4"
            required
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-orange-400 text-white py-4 rounded-lg font-semibold hover:scale-[1.02] transition"
        >
          {cursoEditando ? "💾 Salvar Alterações" : "✨ Cadastrar Curso"}
        </button>
      </form>
    </div>
  );
}
