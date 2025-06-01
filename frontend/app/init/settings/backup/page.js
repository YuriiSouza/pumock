import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Shield, Upload, Download } from "lucide-react";


export default function BackupSettings() {
  return (
    <div className="space-y-6">
      {/* Status do Backup */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Último Backup: Hoje às 03:00
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">2.4 GB</div>
              <div className="text-sm text-green-700">Tamanho do backup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">30</div>
              <div className="text-sm text-green-700">Backups armazenados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">99.9%</div>
              <div className="text-sm text-green-700">Taxa de sucesso</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Backup */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Configurações de Backup</CardTitle>
          <p className="text-slate-500 text-sm">Configure frequência e retenção dos backups</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Frequência</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md">
                <option value="daily">Diário</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Horário</label>
              <input type="time" defaultValue="03:00" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Retenção</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md">
                <option value="30">30 dias</option>
                <option value="60">60 dias</option>
                <option value="90">90 dias</option>
                <option value="365">1 ano</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Local de Armazenamento</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md">
                <option value="aws">Amazon S3</option>
                <option value="google">Google Cloud</option>
                <option value="local">Servidor Local</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Dados para Backup</h4>
            <div className="space-y-2">
              {[
                "Dados de clientes",
                "Histórico de vendas",
                "Configurações do sistema",
                "Logs de atividade",
                "Arquivos enviados",
              ].map((item, index) => (
                <label key={index} className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salvar Configurações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Backups */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-slate-900">Histórico de Backups</CardTitle>
              <p className="text-slate-500 text-sm">Últimos backups realizados</p>
            </div>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Backup Manual
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Hoje 03:00", size: "2.4 GB", status: "Sucesso", type: "Automático" },
              { date: "Ontem 03:00", size: "2.3 GB", status: "Sucesso", type: "Automático" },
              { date: "02/12 03:00", size: "2.3 GB", status: "Sucesso", type: "Automático" },
              { date: "01/12 15:30", size: "2.2 GB", status: "Sucesso", type: "Manual" },
              { date: "01/12 03:00", size: "2.2 GB", status: "Falha", type: "Automático" },
            ].map((backup, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${backup.status === "Sucesso" ? "bg-green-500" : "bg-red-500"}`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{backup.date}</p>
                    <p className="text-xs text-slate-500">
                      {backup.size} • {backup.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={backup.status === "Sucesso" ? "default" : "destructive"}
                    className={backup.status === "Sucesso" ? "bg-green-100 text-green-800" : ""}
                  >
                    {backup.status}
                  </Badge>
                  {backup.status === "Sucesso" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
