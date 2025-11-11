import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursos from "./pages/cursos";
import Cadastro from "./pages/cadastro";
import Navbar from "./components/Navbar";
import QuemSomos from "./pages/QuemSomos";
import OndeEstamos from "./pages/OndeEstamos";
import Login from "./pages/login";
import Privacidade from "./pages/privacidade";
import Ouvidoria from "./pages/ouvidoria";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/cadastro/:id" element={<Cadastro />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/OndeEstamos" element={<OndeEstamos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacidade" element={<Privacidade />} />
         <Route path="/ouvidoria" element={<Ouvidoria />} />
      </Routes>
    </Router>
  );
}
