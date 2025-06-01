import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Shield, Download } from "lucide-react";


export default function BillingSettings(){
  return (

    <div className="space-y-6">
      {/* Plano Atual */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Plano Atual: Professional</CardTitle>
          <p className="text-blue-700">Renovação automática em 15 dias</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">R$ 299</div>
              <div className="text-sm text-blue-700">por mês</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">50</div>
              <div className="text-sm text-blue-700">usuários inclusos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">∞</div>
              <div className="text-sm text-blue-700">clientes ilimitados</div>
            </div>
          </div>
        </CardContent>
      </Card>
  
      {/* Histórico de Faturas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Histórico de Faturas</CardTitle>
          <p className="text-slate-500 text-sm">Suas últimas cobranças e pagamentos</p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-medium text-slate-600">Data</th>
                  <th className="text-left p-4 font-medium text-slate-600">Descrição</th>
                  <th className="text-left p-4 font-medium text-slate-600">Valor</th>
                  <th className="text-left p-4 font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 font-medium text-slate-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    date: "01/12/2024",
                    description: "Plano Professional - Dezembro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                  {
                    date: "01/11/2024",
                    description: "Plano Professional - Novembro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                  {
                    date: "01/10/2024",
                    description: "Plano Professional - Outubro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                  {
                    date: "01/09/2024",
                    description: "Plano Professional - Setembro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                ].map((invoice, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-900">{invoice.date}</td>
                    <td className="p-4 text-slate-600">{invoice.description}</td>
                    <td className="p-4 font-medium text-slate-900">{invoice.amount}</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">{invoice.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
  
      {/* Método de Pagamento */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Método de Pagamento</CardTitle>
          <p className="text-slate-500 text-sm">Cartão usado para cobranças automáticas</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
                <p className="text-sm text-slate-500">Expira em 12/2025</p>
              </div>
            </div>
            <Button variant="outline">Alterar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}