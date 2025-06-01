import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Shield } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div className="space-y-6">
      {/* Status de Segurança */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Status de Segurança: Excelente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">2FA Ativado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">SSL Configurado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">Backup Automático</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">Logs Ativos</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Autenticação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Autenticação e Acesso</CardTitle>
          <p className="text-slate-500 text-sm">Configure políticas de senha e autenticação</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Política de Senhas</h4>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">Mínimo 8 caracteres</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">Incluir números</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">Incluir símbolos</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm">Expiração em 90 dias</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Autenticação de Dois Fatores</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-green-800">2FA Ativado</span>
                  <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Configurar 2FA
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salvar Configurações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Logs de Segurança */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Logs de Segurança</CardTitle>
          <p className="text-slate-500 text-sm">Monitore atividades suspeitas e acessos</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                event: "Login bem-sucedido",
                user: "Ana Silva",
                ip: "192.168.1.100",
                time: "2 min atrás",
                type: "success",
              },
              {
                event: "Tentativa de login falhada",
                user: "Desconhecido",
                ip: "203.0.113.1",
                time: "1 hora atrás",
                type: "warning",
              },
              {
                event: "Alteração de senha",
                user: "Carlos Santos",
                ip: "192.168.1.101",
                time: "3 horas atrás",
                type: "info",
              },
              {
                event: "Login bem-sucedido",
                user: "Maria Oliveira",
                ip: "192.168.1.102",
                time: "5 horas atrás",
                type: "success",
              },
            ].map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      log.type === "success" ? "bg-green-500" : log.type === "warning" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{log.event}</p>
                    <p className="text-xs text-slate-500">
                      {log.user} • {log.ip}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">{log.time}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline">Ver Todos os Logs</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
