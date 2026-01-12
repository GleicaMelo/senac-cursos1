import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setIsLoading(true);

        // Simulação de login administrativo
        setTimeout(() => {
            setIsLoading(false);
            alert('Acesso administrativo concedido!');
        }, 1500);
    };

    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Container principal */}
            <div className="relative w-full max-w-md z-10">
                {/* Badge de aviso */}
                <div className="mb-6 flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-200/60 border-2 border-orange-300 rounded-xl backdrop-blur-sm shadow-lg">
                    <ShieldCheck className="w-5 h-5 text-orange-700" />
                    <span className="text-sm text-orange-900 font-bold">Área Administrativa - Acesso Restrito</span>
                </div>

                {/* Card de login */}
                <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 border-2 border-blue-200 relative overflow-hidden">
                    {/* Brilho superior */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-orange-300 to-blue-300"></div>
                    
                    {/* Logo/Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-300 to-orange-300 rounded-2xl mb-4 shadow-xl relative">
                            <ShieldCheck className="w-10 h-10 text-white" />
                            {/* Pulso de segurança */}
                            <div className="absolute inset-0 rounded-2xl bg-blue-300 animate-ping opacity-30"></div>
                        </div>
                        <h1 className="text-3xl font-bold text-blue-900 mb-2">Acesso Administrativo</h1>
                        <p className="text-blue-700 font-medium">Painel de controle SENAC</p>
                    </div>

                    {/* Formulário */}
                    <div className="space-y-6">
                        {/* Campo Usuário */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                                <User className="w-4 h-4 text-orange-500" />
                                Usuário Administrativo
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-blue-400 group-focus-within:text-orange-500 transition-colors" />
                                </div>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3.5 bg-white/60 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all font-medium"
                                    placeholder="admin"
                                    required
                                />
                            </div>
                        </div>

                        {/* Campo Senha */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                                <Lock className="w-4 h-4 text-orange-500" />
                                Senha de Administrador
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-blue-400 group-focus-within:text-orange-500 transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-12 py-3.5 bg-white/60 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all font-medium"
                                    placeholder="••••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-400 hover:text-orange-500 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Lembrar-me */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 rounded border-blue-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 bg-white/80"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-800 font-medium">
                                    Manter sessão ativa
                                </label>
                            </div>
                            <a href="#" className="text-sm text-orange-600 hover:text-orange-700 transition-colors font-bold">
                                Suporte técnico
                            </a>
                        </div>

                        {/* Botão de Login */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-orange-400 text-white py-3.5 px-4 rounded-xl font-bold hover:from-blue-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl group overflow-hidden"
                        >
                            {/* Efeito de brilho no hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                            
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Verificando credenciais...
                                </>
                            ) : (
                                <>
                                    <ShieldCheck className="w-5 h-5" />
                                    Acessar Painel Administrativo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Aviso de segurança */}
                    <div className="mt-6 p-4 bg-orange-100/70 border-2 border-orange-200 rounded-xl backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div className="text-xs text-blue-900 leading-relaxed">
                                <p className="font-bold text-orange-700 mb-1">⚠️ Aviso de Segurança</p>
                                Todas as atividades administrativas são registradas e monitoradas. Acesso não autorizado é crime e será processado de acordo com a lei.
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-center text-xs text-blue-700 font-medium">
                        Acesso restrito a administradores autorizados
                        <br />
                        <span className="text-orange-600 font-bold">Sistema protegido por autenticação multifator</span>
                    </p>
                </div>

                {/* Informação de suporte */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-blue-800 font-medium">
                        Problemas com acesso?{' '}
                        <a href="#" className="text-orange-600 hover:text-orange-700 font-bold transition-colors underline">
                            Contate o TI
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}