import { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  BookOpen,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    // LOGIN FAKE
    setTimeout(() => {
      if (email === "admin@senac.com" && password === "123456") {
        localStorage.setItem("adminLogado", "true");
        navigate("/admin");
      } else {
        alert("Email ou senha inválidos");
      }
      setIsLoading(false);
    }, 1500);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Botão de voltar superior direito */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 
                   flex items-center gap-2 
                   px-4 py-2 rounded-xl
                   bg-white/70 backdrop-blur-md
                   border border-blue-200
                   text-blue-800 font-semibold
                   shadow-lg hover:shadow-orange-400/40
                   hover:text-orange-600
                   transition-all duration-300
                   hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={18} />
        Voltar para o início
      </button>

      {/* ELEMENTOS DECORATIVOS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-xl opacity-20 animate-pulse -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* CARD LOGIN */}
      <div className="relative w-full max-w-md z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border-2 border-blue-200">
          {/* HEADER */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-300 to-orange-300 rounded-xl mb-4 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Bem-vindo
            </h1>
            <p className="text-blue-700 font-medium">
              Acesse sua conta de estudante
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-bold text-blue-800 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 py-3 bg-white/60 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-400"
                  placeholder="seu.email@estudante.com"
                  required
                />
              </div>
            </div>

            {/* SENHA */}
            <div>
              <label className="block text-sm font-bold text-blue-800 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white/60 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-400"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-orange-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* LEMBRAR */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-blue-800">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Lembrar-me
              </label>
              <span className="text-sm text-orange-600 font-semibold cursor-pointer">
                Esqueceu a senha?
              </span>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-orange-400 text-white py-3 rounded-lg font-bold hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Entrando...
                </>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-blue-700 font-medium">
          🔒 Protegido por criptografia de ponta a ponta
        </p>
      </div>
    </div>
  );
}
