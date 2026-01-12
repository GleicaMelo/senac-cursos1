import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cursos from "./pages/cursos";
import Cadastro from "./pages/cadastro";
import QuemSomos from "./pages/QuemSomos";
import OndeEstamos from "./pages/OndeEstamos";
import Login from "./pages/login";
import Privacidade from "./pages/privacidade";
import Ouvidoria from "./pages/ouvidoria";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./routes/AdminRoute";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* SITE PÚBLICO */}
        <Route path="/" element={<Cursos />} />
        <Route path="/cadastro/:id" element={<Cadastro />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/ondeestamos" element={<OndeEstamos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/ouvidoria" element={<Ouvidoria />} />

        {/* ADMIN */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}