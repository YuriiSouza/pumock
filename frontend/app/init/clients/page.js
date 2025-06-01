"use client"

import {
  UserPlus,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react"
import Button from "@/components/button"
import Input  from "@/components/input"
import Card from "@/components/cards/card"
import CardContent from "@/components/cards/cardContent"
import Avatar from "@/components/avatar/avatar"
import AvatarFallback from "@/components/avatar/avatarFallback"
import Badge from "@/components/badge"
import { useState } from "react"

const clients = [
  {
    id: 1,
    name: "Ana Silva",
    company: "Tech Solutions",
    status: "Ativo",
    value: "R$ 15.000",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Carlos Santos",
    company: "Digital Corp",
    status: "Negociação",
    value: "R$ 25.000",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "Maria Oliveira",
    company: "StartUp Inc",
    status: "Proposta",
    value: "R$ 8.500",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "João Costa",
    company: "Enterprise Ltd",
    status: "Ativo",
    value: "R$ 45.000",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function Clients(){
    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Clientes</h2>
            <p className="text-slate-500">Gerenciar seus clientes e contatos</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Novo Cliente
          </Button>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Buscar clientes..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {clients.map((client) => (
                <div key={client.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar src={client.avatar}>
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-slate-900">{client.name}</h3>
                        <p className="text-sm text-slate-500">{client.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{client.value}</p>
                        <Badge
                          variant={client.status === "Ativo" ? "default" : "secondary"}
                          className={client.status === "Ativo" ? "bg-green-100 text-green-800" : ""}
                        >
                          {client.status}
                        </Badge>
                      </div>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            setDropdownOpen(dropdownOpen === `client-${client.id}` ? null : `client-${client.id}`)
                          }
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        {dropdownOpen === `client-${client.id}` && (
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
                              Editar
                            </div>
                            <div
                              onClick={() => setDropdownOpen(null)}
                              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100"
                            >
                              Enviar mensagem
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