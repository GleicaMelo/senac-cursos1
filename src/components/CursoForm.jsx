import { useEffect, useState } from "react";

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
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded-xl shadow max-w-3xl space-y-4"
    >
      <input
        placeholder="Nome do curso"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
        className="w-full border px-4 py-2 rounded"
        required
      />

      <textarea
        placeholder="Descrição"
        value={form.descricao}
        onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        className="w-full border px-4 py-2 rounded"
        required
      />

      <input
        placeholder="URL da imagem"
        value={form.imagem}
        onChange={(e) => setForm({ ...form, imagem: e.target.value })}
        className="w-full border px-4 py-2 rounded"
      />

      <select
        value={form.categoria}
        onChange={(e) => setForm({ ...form, categoria: e.target.value })}
        className="w-full border px-4 py-2 rounded"
        required
      >
        <option value="">Categoria</option>
        <option>TI</option>
        <option>Saúde</option>
        <option>Administração</option>
      </select>

      <input
        placeholder="Professor"
        value={form.professor}
        onChange={(e) => setForm({ ...form, professor: e.target.value })}
        className="w-full border px-4 py-2 rounded"
        required
      />

      {/* 📅 Período do curso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Data inicial
          </label>
          <input
            type="date"
            value={form.dataInicio}
            onChange={(e) =>
              setForm({ ...form, dataInicio: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Data final
          </label>
          <input
            type="date"
            value={form.dataFim}
            min={form.dataInicio}
            onChange={(e) =>
              setForm({ ...form, dataFim: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded">
        {cursoEditando ? "Salvar Alterações" : "Cadastrar Curso"}
      </button>
    </form>
  );
}
