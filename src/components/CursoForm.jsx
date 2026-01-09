import { useEffect, useState } from "react";
import { BookOpen, Image, User, Calendar, Tag, FileText } from "lucide-react";

export default function CursoForm({ salvarCurso, cursoEditando }) {
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
  }

  return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full space-y-6 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {cursoEditando ? "Editar Curso" : "Novo Curso"}
          </h2>
          <p className="text-gray-500">
            Preencha os dados do curso abaixo
          </p>
        </div>

        {/* Nome do Curso */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nome do Curso
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              placeholder="Ex: Desenvolvimento Web Completo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full border-2 border-gray-200 pl-12 pr-4 py-3 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
              required
            />
          </div>
        </div>

        {/* Descrição */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Descrição
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              placeholder="Descreva o conteúdo e objetivos do curso..."
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              className="w-full border-2 border-gray-200 pl-12 pr-4 py-3 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none min-h-32 resize-none"
              required
            />
          </div>
        </div>

        {/* URL da Imagem */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            URL da Imagem
          </label>
          <div className="relative">
            <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              placeholder="https://exemplo.com/imagem.jpg"
              value={form.imagem}
              onChange={(e) => setForm({ ...form, imagem: e.target.value })}
              className="w-full border-2 border-gray-200 pl-12 pr-4 py-3 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
            />
          </div>
          {form.imagem && (
            <div className="mt-3 rounded-lg overflow-hidden border-2 border-gray-200">
              <img
                src={form.imagem}
                alt="Preview"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        {/* Grid: Categoria e Professor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Categoria */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Categoria
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
              <select
                value={form.categoria}
                onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                className="w-full border-2 border-gray-200 pl-12 pr-4 py-3 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none appearance-none bg-white"
                required
              >
                <option value="">Selecione...</option>
                <option>Administração</option>
                <option>Beleza</option>
                <option>Comunicação</option>
                <option>Comércio</option>
                <option>Educação</option>
                <option>Gastronômia</option>
                <option>Gestão e Negócios</option>
                <option>Idiomas</option>
                <option>Moda</option>
                <option>Saúde</option>
                <option>TI</option>
              </select>
            </div>
          </div>

          {/* Professor */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Professor
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                placeholder="Nome do professor"
                value={form.professor}
                onChange={(e) => setForm({ ...form, professor: e.target.value })}
                className="w-full border-2 border-gray-200 pl-12 pr-4 py-3 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Período do Curso */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-2 border-orange-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            Período do Curso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data Inicial
              </label>
              <input
                type="date"
                value={form.dataInicio}
                onChange={(e) =>
                  setForm({ ...form, dataInicio: e.target.value })
                }
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data Final
              </label>
              <input
                type="date"
                value={form.dataFim}
                min={form.dataInicio}
                onChange={(e) =>
                  setForm({ ...form, dataFim: e.target.value })
                }
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                required
              />
            </div>
          </div>
        </div>

        {/* Botão de Submit */}
        <button 
          onClick={submit}
          className="w-full bg-gradient-to-r from-blue-400 to-orange-400 hover:from-blue-500 hover:to-orange-500 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {cursoEditando ? "💾 Salvar Alterações" : "✨ Cadastrar Curso"}
        </button>
      </div>
    </div>
  );
}