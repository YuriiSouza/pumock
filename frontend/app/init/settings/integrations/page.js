import Avatar from "@/components/avatar/avatar";
import AvatarFallback from "@/components/avatar/avatarFallback";
import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Clock, Edit, MoreHorizontal, Shield, UserPlus, Users, Plus } from "lucide-react";

export default function IntegrationsSettings() {
  return (

    <div className="space-y-6">
      {/* Integrações Ativas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Integrações Ativas</CardTitle>
          <p className="text-slate-500 text-sm">Serviços conectados ao seu sistema</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "WhatsApp Business",
                status: "Conectado",
                icon: "💬",
                description: "Envio de mensagens automáticas",
              },
              { name: "Google Calendar", status: "Conectado", icon: "📅", description: "Sincronização de eventos" },
              { name: "Mailchimp", status: "Desconectado", icon: "📧", description: "Marketing por e-mail" },
              { name: "Zapier", status: "Conectado", icon: "⚡", description: "Automação de processos" },
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <div>
                    <h4 className="font-medium text-slate-900">{integration.name}</h4>
                    <p className="text-sm text-slate-500">{integration.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={integration.status === "Conectado" ? "default" : "secondary"}
                    className={integration.status === "Conectado" ? "bg-green-100 text-green-800" : ""}
                  >
                    {integration.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    {integration.status === "Conectado" ? "Configurar" : "Conectar"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* APIs e Webhooks */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">APIs e Webhooks</CardTitle>
          <p className="text-slate-500 text-sm">Configure integrações personalizadas</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-slate-900">Chave da API</h4>
              <Button variant="outline" size="sm">
                Regenerar
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <code className="flex-1 p-2 bg-white border rounded text-sm font-mono">pk_live_51234567890abcdef...</code>
              <Button variant="outline" size="sm">
                Copiar
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Webhooks Configurados</h4>
            {[
              { url: "https://app.exemplo.com/webhook/vendas", event: "Nova Venda", status: "Ativo" },
              { url: "https://app.exemplo.com/webhook/clientes", event: "Novo Cliente", status: "Ativo" },
            ].map((webhook, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900">{webhook.event}</p>
                  <p className="text-xs text-slate-500">{webhook.url}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">{webhook.status}</Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Webhook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
