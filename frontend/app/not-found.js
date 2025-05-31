"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center px-4">
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

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Search className="h-16 w-16 text-blue-600" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Página não encontrada</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
          Ops! A página que você está procurando não existe ou foi movida para outro local.
        </p>

        {/* Suggestions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">O que você pode fazer:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Verificar a URL</p>
                <p className="text-sm text-slate-600">Certifique-se de que o endereço está correto</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Voltar ao início</p>
                <p className="text-sm text-slate-600">Navegue a partir da página principal</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Usar a busca</p>
                <p className="text-sm text-slate-600">Procure pelo conteúdo desejado</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-bold">4</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Entrar em contato</p>
                <p className="text-sm text-slate-600">Nossa equipe pode ajudar você</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao Início
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Página Anterior
          </button>
        </div>

        {/* Help Link */}
        <div className="mt-8">
          <Link href="/landing#contato">
            <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center mx-auto">
              <HelpCircle className="mr-2 h-4 w-4" />
              Precisa de ajuda? Entre em contato
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
