import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    // LOGIN FAKE
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        localStorage.setItem("adminAuth", "true");
        setIsLoading(false);
        navigate("/admin"); 
      } else {
        setIsLoading(false);
        alert("Usuário ou senha inválidos");
      }
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">

      {/* BOTÃO VOLTAR supeiror direito */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 
                   flex items-center gap-2 
                   px-4 py-2 rounded-xl
                   bg-orange-500/70 backdrop-blur-md
                   border border-blue-200
                   text-white font-semibold
                   shadow-lg hover:shadow-orange-400/40
                   hover:text-blue-800
                   transition-all duration-300
                   hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={18} />
        Voltar para o início
      </button>

      <div className="relative w-full max-w-md z-10">

        {/* Badge */}
        <div className="mb-6 flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-200/60 border-2 border-orange-300 rounded-xl backdrop-blur-sm shadow-lg">
          <ShieldCheck className="w-5 h-5 text-orange-700" />
          <span className="text-sm text-orange-900 font-bold">
            Área Administrativa - Acesso Restrito
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 border-2 border-blue-200">

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-300 to-orange-300 rounded-2xl mb-4 shadow-xl">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-blue-900">
              Acesso Administrativo
            </h1>
            <p className="text-blue-700 font-medium">
              Painel de controle SENAC
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Usuário */}
            <div>
              <label className="block text-sm font-bold text-blue-800 mb-2">
                Usuário Administrativo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-blue-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-bold text-blue-800 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-blue-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-blue-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Botão */}
            <button
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-orange-400 text-white py-3.5 rounded-xl font-bold hover:from-blue-500 hover:to-orange-500 disabled:opacity-50"
            >
              {isLoading ? "Entrando..." : "Acessar Painel"}
              <ArrowRight />
            </button>
          </form>

          <div className="mt-6 p-4 bg-orange-100 rounded-xl flex gap-3">
            <AlertCircle className="text-orange-600" />
            <p className="text-xs text-orange-800 font-medium">
              Acesso não autorizado é crime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}