import { useEffect, useState } from "react";
import { Eye, EyeOff, Lock, Mail, BookOpen, ArrowRight } from "lucide-react";
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

    // cleanup correto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border-2 border-blue-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-300 to-orange-300 rounded-xl mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Bem-vindo</h1>
            <p className="text-blue-700 font-medium">
              Acesse sua conta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-blue-800 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 py-3 border-2 border-blue-200 rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-blue-800 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border-2 border-blue-200 rounded-lg"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-400 to-orange-400 text-white py-3 rounded-lg font-bold"
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}