import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //aqu trava o scroll somente enssa tela e nas outras fica normal
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", email, senha);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100 px-6">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-10 text-center">

  
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 text-white p-3 rounded-full mb-3">
            <LogIn size={28} />
          </div>

          <h1 className="text-3xl font-bold text-blue-700">
            Bem-vindo ao Senac 😉
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Por favor, acesse sua conta para continuar
          </p>
        </div>
         {/*formularios*/}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition"
          >
            Entrar
          </button>
        </form>

      {/*criar contas*/}
        <p className="text-gray-600 text-sm mt-6">
          Não tem uma conta?{" "}
          <button
            onClick={() => navigate("/cadastro-login")}
            className="text-blue-600 hover:underline font-medium"
          >
            Criar conta
          </button>
        </p>

      </div>
    </div>
  );
}
