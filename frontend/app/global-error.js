"use client"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-slate-50 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">Pumock</span>
              </div>
            </div>

            {/* Error Illustration */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="h-16 w-16 text-red-600" />
              </div>
            </div>

            {/* Content */}
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Erro crítico do sistema</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
              Ocorreu um erro crítico na aplicação. Nossa equipe técnica foi notificada automaticamente.
            </p>

            {/* Critical Error Info */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Erro Global Detectado</h3>
              <p className="text-red-700 text-sm">
                Este é um erro de nível crítico que afeta toda a aplicação. Estamos trabalhando para resolver o problema
                o mais rápido possível.
              </p>
              {error.digest && <p className="text-xs text-red-600 mt-2">Código de referência: {error.digest}</p>}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Reiniciar Aplicação
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                <Home className="mr-2 h-5 w-5" />
                Recarregar Página
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-100 rounded-lg border border-red-300">
              <p className="text-sm text-red-800">
                <strong>Suporte de Emergência:</strong>
              </p>
              <p className="text-sm text-red-700 mt-1">
                Email:{" "}
                <a href="mailto:emergencia@pumock.com" className="underline">
                  emergencia@pumock.com
                </a>
              </p>
              <p className="text-sm text-red-700">
                Telefone:{" "}
                <a href="tel:+5511999999999" className="underline">
                  (11) 9999-9999
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
