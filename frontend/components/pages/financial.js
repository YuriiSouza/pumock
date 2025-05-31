"use client"

import {
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
} from "lucide-react"
import Button from "@/components/button"
import Input  from "@/components/input"
import Card from "@/components/cards/card"
import CardTitle from "@/components/cards/cardTitle"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"
import Badge from "@/components/badge"

const financialData = {
  accountsReceivable: [
    { id: 1, client: "Tech Solutions", amount: "R$ 15.000", dueDate: "2024-01-15", status: "Pendente" },
    { id: 2, client: "Digital Corp", amount: "R$ 25.000", dueDate: "2024-01-20", status: "Pago" },
    { id: 3, client: "StartUp Inc", amount: "R$ 8.500", dueDate: "2024-01-25", status: "Vencido" },
  ],
  accountsPayable: [
    { id: 1, supplier: "Fornecedor ABC", amount: "R$ 5.000", dueDate: "2024-01-18", status: "Pendente" },
    { id: 2, supplier: "Empresa XYZ", amount: "R$ 12.000", dueDate: "2024-01-22", status: "Pago" },
  ],
  cashFlow: {
    income: "R$ 125.000",
    expenses: "R$ 85.000",
    balance: "R$ 40.000",
  },
}


export default function Financial(){
  return(
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Financeiro</h2>
          <p className="text-slate-500">Gestão de contas a pagar e receber</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Transação
        </Button>
      </div>
  
      {/* Resumo Financeiro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Receitas</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{financialData.cashFlow.income}</div>
            <p className="text-xs text-slate-500">Este mês</p>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Despesas</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{financialData.cashFlow.expenses}</div>
            <p className="text-xs text-slate-500">Este mês</p>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Saldo</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{financialData.cashFlow.balance}</div>
            <p className="text-xs text-slate-500">Saldo atual</p>
          </CardContent>
        </Card>
      </div>
  
      {/* Contas a Receber e Pagar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">Contas a Receber</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {financialData.accountsReceivable.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">{account.client}</p>
                  <p className="text-sm text-slate-500">Venc: {account.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{account.amount}</p>
                  <Badge
                    variant={
                      account.status === "Pago" ? "default" : account.status === "Vencido" ? "destructive" : "secondary"
                    }
                    className="text-xs"
                  >
                    {account.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">Contas a Pagar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {financialData.accountsPayable.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">{account.supplier}</p>
                  <p className="text-sm text-slate-500">Venc: {account.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{account.amount}</p>
                  <Badge variant={account.status === "Pago" ? "default" : "secondary"} className="text-xs">
                    {account.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
