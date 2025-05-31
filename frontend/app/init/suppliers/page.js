"use client"

import {
  Search,
  Plus,
  Filter,
  MoreHorizontal
} from "lucide-react"
import Avatar from "@/components/avatar/avatar"
import AvatarFallback from "@/components/avatar/avatarFallback"
import Button from "@/components/button"
import Input  from "@/components/input"
import Card from "@/components/cards/card"
import CardTitle from "@/components/cards/cardTitle"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"
import Badge from "@/components/badge"

const suppliersData = [
  {
    id: 1,
    name: "Fornecedor ABC",
    contact: "contato@abc.com",
    phone: "(11) 9999-9999",
    products: 15,
    status: "Ativo",
  },
  { id: 2, name: "Empresa XYZ", contact: "vendas@xyz.com", phone: "(11) 8888-8888", products: 8, status: "Ativo" },
  {
    id: 3,
    name: "Distribuidora 123",
    contact: "comercial@123.com",
    phone: "(11) 7777-7777",
    products: 22,
    status: "Inativo",
  },
]


export default function Suppliers({dropdownOpen, setDropdownOpen}) {
  return (    
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Fornecedores</h2>
          <p className="text-slate-500">Gestão de fornecedores e parcerias</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Fornecedor
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Buscar fornecedores..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {suppliersData.map((supplier) => (
              <div key={supplier.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {supplier.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-slate-900">{supplier.name}</h3>
                      <p className="text-sm text-slate-500">{supplier.contact}</p>
                      <p className="text-sm text-slate-500">{supplier.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-900">{supplier.products} produtos</p>
                      <Badge
                        variant={supplier.status === "Ativo" ? "default" : "secondary"}
                        className={supplier.status === "Ativo" ? "bg-green-100 text-green-800" : ""}
                      >
                        {supplier.status}
                      </Badge>
                    </div>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setDropdownOpen(dropdownOpen === `supplier-${supplier.id}` ? null : `supplier-${supplier.id}`)
                        }
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                      {dropdownOpen === `supplier-${supplier.id}` && (
                        <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-slate-200 bg-white p-1 shadow-md">
                          <div
                            onClick={() => setDropdownOpen(null)}
                            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                          >
                            Ver produtos
                          </div>
                          <div
                            onClick={() => setDropdownOpen(null)}
                            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                          >
                            Editar
                          </div>
                          <div
                            onClick={() => setDropdownOpen(null)}
                            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                          >
                            Nova compra
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

