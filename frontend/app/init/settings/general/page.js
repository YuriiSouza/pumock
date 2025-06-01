import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import Input from "@/components/input";
import { CheckCircle, Shield } from "lucide-react";


export default function GeneralSettings() {
  return (

    <div className="space-y-4 lg:space-y-6">
      {/* Informações da Empresa */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base lg:text-lg text-slate-900">Informações da Empresa</CardTitle>
          <p className="text-sm text-slate-500">Configure os dados básicos da sua empresa</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nome da Empresa</label>
              <Input placeholder="Pumock Tecnologia" defaultValue="Pumock Tecnologia" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">CNPJ</label>
              <Input placeholder="00.000.000/0001-00" defaultValue="12.345.678/0001-90" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
              <Input placeholder="contato@pumock.com" defaultValue="contato@pumock.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
              <Input placeholder="(11) 9999-9999" defaultValue="(11) 9999-9999" />
            </div>
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Endereço</label>
              <Input
                placeholder="Rua das Empresas, 123 - São Paulo, SP"
                defaultValue="Rua das Empresas, 123 - São Paulo, SP"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="w-full sm:w-auto">Salvar Alterações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Configurações Regionais */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base lg:text-lg text-slate-900">Configurações Regionais</CardTitle>
          <p className="text-sm text-slate-500">Defina idioma, fuso horário e formato de dados</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Idioma</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Fuso Horário</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                <option value="America/New_York">New York (GMT-5)</option>
                <option value="Europe/London">London (GMT+0)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Moeda</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="BRL">Real (R$)</option>
                <option value="USD">Dólar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="w-full sm:w-auto">Salvar Alterações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Tema e Aparência */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base lg:text-lg text-slate-900">Tema e Aparência</CardTitle>
          <p className="text-sm text-slate-500">Personalize a aparência do sistema</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Tema</label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="radio" name="theme" value="light" defaultChecked className="mr-3" />
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white border-2 border-slate-300 rounded mr-3"></div>
                    <span className="text-sm lg:text-base">Claro</span>
                  </div>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="theme" value="dark" className="mr-3" />
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-slate-800 border-2 border-slate-600 rounded mr-3"></div>
                    <span className="text-sm lg:text-base">Escuro</span>
                  </div>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="theme" value="auto" className="mr-3" />
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-white to-slate-800 border-2 border-slate-300 rounded mr-3"></div>
                    <span className="text-sm lg:text-base">Automático</span>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Cor Principal</label>
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {[
                  { color: "bg-blue-600", name: "Azul" },
                  { color: "bg-green-600", name: "Verde" },
                  { color: "bg-purple-600", name: "Roxo" },
                  { color: "bg-red-600", name: "Vermelho" },
                  { color: "bg-orange-600", name: "Laranja" },
                  { color: "bg-pink-600", name: "Rosa" },
                  { color: "bg-indigo-600", name: "Índigo" },
                  { color: "bg-teal-600", name: "Teal" },
                ].map((color, index) => (
                  <label key={index} className="flex flex-col items-center cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value={color.name}
                      defaultChecked={index === 0}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 lg:w-8 lg:h-8 ${color.color} rounded-full border-2 border-transparent hover:border-slate-300 transition-colors`}
                    ></div>
                    <span className="text-xs mt-1 text-center">{color.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="w-full sm:w-auto">Aplicar Tema</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}