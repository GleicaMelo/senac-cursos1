import { useEffect, useState } from "react";

export default function CursoForm({ salvarCurso, cursoEditando }) {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    categoria: "",
    professor: "",
    data: "",
  });

  useEffect(() => {
    if (cursoEditando) setForm(cursoEditando);
  }, [cursoEditando]);

  function submit(e) {
    e.preventDefault();

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
      data: "",
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
      />

      <textarea
        placeholder="Descrição"
        value={form.descricao}
        onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        className="w-full border px-4 py-2 rounded"
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
      />

      <input
        type="date"
        value={form.data}
        onChange={(e) => setForm({ ...form, data: e.target.value })}
        className="w-full border px-4 py-2 rounded"
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded">
        {cursoEditando ? "Salvar Alterações" : "Cadastrar Curso"}
      </button>
    </form>
  );
}