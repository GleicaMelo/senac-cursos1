import { useState } from "react";
import CursoForm from "../components/CursoForm";

export default function Admin() {
  const [cursos, setCursos] = useState([]);
  const [cursoEditando, setCursoEditando] = useState(null);

  function salvarCurso(curso) {
    if (cursoEditando) {
      setCursos(cursos.map(c => c.id === curso.id ? curso : c));
      setCursoEditando(null);
    } else {
      setCursos([...cursos, curso]);
    }
  }

  return (
    <CursoForm
      salvarCurso={salvarCurso}
      cursoEditando={cursoEditando}
    />
  );
}