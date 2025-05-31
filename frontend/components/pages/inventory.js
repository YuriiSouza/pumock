"use client"

import {
  Upload,
  Plus,
  AlertCircle,
  Eye,
  Edit
} from "lucide-react"
import Button from "@/components/button"
import Card from "@/components/cards/card"
import CardTitle from "@/components/cards/cardTitle"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"

const inventoryData = [
  { id: 1, name: "Produto A", sku: "PRD001", stock: 150, minStock: 50, price: "R$ 299,90", category: "Eletrônicos" },
  { id: 2, name: "Produto B", sku: "PRD002", stock: 25, minStock: 30, price: "R$ 199,90", category: "Acessórios" },
  { id: 3, name: "Produto C", sku: "PRD003", stock: 80, minStock: 20, price: "R$ 499,90", category: "Eletrônicos" },
  { id: 4, name: "Produto D", sku: "PRD004", stock: 200, minStock: 100, price: "R$ 99,90", category: "Diversos" },
]


export default function Inventory() {
  return(
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Estoque</h2>
          <p className="text-slate-500">Controle de produtos e inventário</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Entrada
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Produto
          </Button>
        </div>
      </div>

      {/* Alertas de Estoque */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-800 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            Alertas de Estoque
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-700">2 produtos estão com estoque abaixo do mínimo recomendado</p>
        </CardContent>
      </Card>

      {/* Lista de Produtos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Produtos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto -mx-6 lg:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-slate-600">Produto</th>
                    <th className="text-left p-4 font-medium text-slate-600">SKU</th>
                    <th className="text-left p-4 font-medium text-slate-600">Estoque</th>
                    <th className="text-left p-4 font-medium text-slate-600">Preço</th>
                    <th className="text-left p-4 font-medium text-slate-600">Categoria</th>
                    <th className="text-left p-4 font-medium text-slate-600">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {inventoryData.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50">
                      <td className="p-4">
                        <p className="font-medium text-slate-900">{product.name}</p>
                      </td>
                      <td className="p-4 text-slate-600">{product.sku}</td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`font-medium ${product.stock < product.minStock ? "text-red-600" : "text-slate-900"}`}
                          >
                            {product.stock}
                          </span>
                          {product.stock < product.minStock && <AlertCircle className="h-4 w-4 text-red-600" />}
                        </div>
                      </td>
                      <td className="p-4 font-medium text-slate-900">{product.price}</td>
                      <td className="p-4 text-slate-600">{product.category}</td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
