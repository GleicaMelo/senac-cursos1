import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursos from "./pages/cursos";
import Cadastro from "./pages/cadastro";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/cadastro/:id" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
