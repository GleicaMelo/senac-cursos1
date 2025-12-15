import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function loginAdmin(e) {
    e.preventDefault();

    if (email === "admin@senac.com" && senha === "123456") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } else {
      alert("Acesso negado");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={loginAdmin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Admin Senac
        </h1>

        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Entrar
        </button>
      </form>
    </div>
  );
}