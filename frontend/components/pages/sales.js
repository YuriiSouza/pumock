"use client"

import {
  ShoppingCart,
  Plus,
  TrendingUp,
  DollarSign,
  Package,
  MoreHorizontal
} from "lucide-react"
import Button from "@/components/button"
// import Input  from "@/components/input"
import Card from "@/components/cards/card"
import CardTitle from "@/components/cards/cardTitle"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"
import Badge from "@/components/badge"

const salesData = [
  {
    id: 1,
    client: "Ana Silva",
    products: "Produto A x2",
    total: "R$ 599,80",
    date: "2024-01-15",
    status: "Concluída",
  },
  {
    id: 2,
    client: "Carlos Santos",
    products: "Produto B x1, Produto C x1",
    total: "R$ 699,80",
    date: "2024-01-14",
    status: "Pendente",
  },
  {
    id: 3,
    client: "Maria Oliveira",
    products: "Produto D x5",
    total: "R$ 499,50",
    date: "2024-01-13",
    status: "Concluída",
  },
]

export default function Sales({dropdownOpen, setDropdownOpen}){
  return(
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Vendas</h2>
            <p className="text-slate-500">Gestão de vendas e faturamento</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Venda
          </Button>
        </div>
  
        {/* Métricas de Vendas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Vendas Hoje</CardTitle>
              <ShoppingCart className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">R$ 12.450</div>
              <p className="text-xs text-green-600">+15% vs ontem</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Vendas Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">R$ 285.600</div>
              <p className="text-xs text-green-600">+8% vs mês anterior</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Ticket Médio</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">R$ 599</div>
              <p className="text-xs text-blue-600">+3% este mês</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Pedidos</CardTitle>
              <Package className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">147</div>
              <p className="text-xs text-slate-500">Este mês</p>
            </CardContent>
          </Card>
        </div>
  
        {/* Lista de Vendas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">Vendas Recentes</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {salesData.map((sale) => (
                <div key={sale.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-slate-900">{sale.client}</h3>
                          <p className="text-sm text-slate-500">{sale.products}</p>
                          <p className="text-xs text-slate-400">{sale.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-slate-900">{sale.total}</span>
                      <Badge
                        variant={sale.status === "Concluída" ? "default" : "secondary"}
                        className={sale.status === "Concluída" ? "bg-green-100 text-green-800" : ""}
                      >
                        {sale.status}
                      </Badge>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDropdownOpen(dropdownOpen === `sale-${sale.id}` ? null : `sale-${sale.id}`)}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        {dropdownOpen === `sale-${sale.id}` && (
                          <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-slate-200 bg-white p-1 shadow-md">
                            <div
                              onClick={() => setDropdownOpen(null)}
                              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                            >
                              Ver detalhes
                            </div>
                            <div
                              onClick={() => setDropdownOpen(null)}
                              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                            >
                              Emitir comprovante
                            </div>
                            <div
                              onClick={() => setDropdownOpen(null)}
                              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                            >
                              Cancelar venda
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
}
