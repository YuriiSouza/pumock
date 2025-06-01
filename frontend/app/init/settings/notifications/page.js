import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Shield } from "lucide-react";


export default function NotificationsSettings() {
  return (    
    <div className="space-y-6">
      {/* Configurações de E-mail */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Notificações por E-mail</CardTitle>
          <p className="text-slate-500 text-sm">Configure quando e como receber notificações</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Vendas e Clientes</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm">Novos leads</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Vendas concluídas</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Tarefas vencidas</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Relatórios semanais</span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Sistema</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm">Atualizações do sistema</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Alertas de segurança</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Backup concluído</span>
                  <input type="checkbox" className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Manutenção programada</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  
      {/* Configurações Push */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Notificações Push</CardTitle>
          <p className="text-slate-500 text-sm">Notificações em tempo real no navegador</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg mb-4">
            <div>
              <h4 className="font-medium text-blue-900">Notificações Push</h4>
              <p className="text-sm text-blue-700">Receba alertas instantâneos no navegador</p>
            </div>
            <Button>Ativar Push</Button>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Mensagens urgentes</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Novas tarefas atribuídas</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Lembretes de reunião</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
          </div>
        </CardContent>
      </Card>
  
      {/* Horários de Notificação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Horários de Notificação</CardTitle>
          <p className="text-slate-500 text-sm">Defina quando receber notificações</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Horário de Início</label>
              <input type="time" defaultValue="08:00" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Horário de Fim</label>
              <input type="time" defaultValue="18:00" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Dias da Semana</label>
            <div className="flex flex-wrap gap-2">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, index) => (
                <label key={day} className="flex items-center">
                  <input type="checkbox" defaultChecked={index < 5} className="mr-2" />
                  <span className="text-sm">{day}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button>Salvar Horários</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
