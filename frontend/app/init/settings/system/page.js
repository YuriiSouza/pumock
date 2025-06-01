import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Shield } from "lucide-react";


export default function SystemSettings() {
  return (
    <div className="space-y-6">
      {/* Informações do Sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Informações do Sistema</CardTitle>
          <p className="text-slate-500 text-sm">Detalhes técnicos e status do sistema</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Versão do Sistema:</span>
                <span className="text-sm font-medium text-slate-900">v2.4.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Última Atualização:</span>
                <span className="text-sm font-medium text-slate-900">15/12/2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Uptime:</span>
                <span className="text-sm font-medium text-green-600">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Servidor:</span>
                <span className="text-sm font-medium text-slate-900">AWS us-east-1</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Banco de Dados:</span>
                <span className="text-sm font-medium text-slate-900">PostgreSQL 14.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Cache:</span>
                <span className="text-sm font-medium text-slate-900">Redis 6.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Storage:</span>
                <span className="text-sm font-medium text-slate-900">45.2 GB / 100 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">SSL:</span>
                <span className="text-sm font-medium text-green-600">Ativo</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance do Sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Performance do Sistema</CardTitle>
          <p className="text-slate-500 text-sm">Métricas de desempenho em tempo real</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-slate-600">CPU</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">76%</div>
              <div className="text-sm text-slate-600">Memória</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "76%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">45%</div>
              <div className="text-sm text-slate-600">Disco</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">120ms</div>
              <div className="text-sm text-slate-600">Latência</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manutenção */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Manutenção do Sistema</CardTitle>
          <p className="text-slate-500 text-sm">Ferramentas de limpeza e otimização</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Limpeza de Cache</h4>
              <p className="text-sm text-slate-600 mb-3">Remove arquivos temporários e otimiza performance</p>
              <Button variant="outline" className="w-full">
                Limpar Cache
              </Button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Otimização de BD</h4>
              <p className="text-sm text-slate-600 mb-3">Reorganiza e otimiza o banco de dados</p>
              <Button variant="outline" className="w-full">
                Otimizar BD
              </Button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Verificação de Integridade</h4>
              <p className="text-sm text-slate-600 mb-3">Verifica consistência dos dados</p>
              <Button variant="outline" className="w-full">
                Verificar
              </Button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Logs de Sistema</h4>
              <p className="text-sm text-slate-600 mb-3">Visualiza logs detalhados do sistema</p>
              <Button variant="outline" className="w-full">
                Ver Logs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Atualizações */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Atualizações Disponíveis</CardTitle>
          <p className="text-slate-500 text-sm">Mantenha seu sistema sempre atualizado</p>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-blue-900">Atualização v2.5.0 Disponível</h4>
                <p className="text-sm text-blue-700">Novas funcionalidades e correções de segurança</p>
                <ul className="text-sm text-blue-600 mt-2 space-y-1">
                  <li>• Novo dashboard de analytics</li>
                  <li>• Melhorias de performance</li>
                  <li>• Correções de segurança</li>
                </ul>
              </div>
              <Button>Atualizar Agora</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}