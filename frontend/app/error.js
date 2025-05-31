"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCw, Home, AlertTriangle, Mail } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application Error:", error)
  }, [error])

  return (
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
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Algo deu errado</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
          Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
        </p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-semibold text-red-800 mb-2">Detalhes do erro (desenvolvimento):</h3>
            <code className="text-sm text-red-700 break-all">{error.message}</code>
            {error.digest && <p className="text-xs text-red-600 mt-2">ID do erro: {error.digest}</p>}
          </div>
        )}

        {/* Solutions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">O que você pode tentar:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <RefreshCw className="h-3 w-3 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Recarregar a página</p>
                <p className="text-sm text-slate-600">Às vezes um simples refresh resolve</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Home className="h-3 w-3 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Voltar ao início</p>
                <p className="text-sm text-slate-600">Comece novamente pela página principal</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">⏰</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Aguardar um momento</p>
                <p className="text-sm text-slate-600">O problema pode ser temporário</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="h-3 w-3 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Reportar o problema</p>
                <p className="text-sm text-slate-600">Nos ajude a melhorar o sistema</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Tentar Novamente
          </button>
          <Link href="/">
            <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao Início
            </button>
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Precisa de ajuda urgente?</strong>
          </p>
          <p className="text-sm text-blue-700 mt-1">
            Entre em contato:{" "}
            <a href="mailto:suporte@pumock.com" className="underline">
              suporte@pumock.com
            </a>{" "}
            ou
            <a href="tel:+5511999999999" className="underline ml-1">
              (11) 9999-9999
            </a>
          </p>
        </div>

        {/* Error ID for Support */}
        {error.digest && (
          <div className="mt-4">
            <p className="text-xs text-slate-500">
              ID do erro para suporte: <code className="bg-slate-100 px-2 py-1 rounded">{error.digest}</code>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
