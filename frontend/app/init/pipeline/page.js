"use client"

import {
  Upload,
  Plus,
  AlertCircle,
  Eye,
  Edit,
  Target,
  TrendingUp,
  DollarSign,
  Clock
} from "lucide-react"
import Button from "@/components/button"
import Card from "@/components/cards/card"
import CardTitle from "@/components/cards/cardTitle"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"
import Badge from "@/components/badge"

export default function Pipeline() {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header com Métricas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Total Pipeline</CardTitle>
            <Target className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-slate-900">R$ 495.000</div>
            <p className="text-xs text-slate-500">30 oportunidades</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Taxa Conversão</CardTitle>
            <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-green-600">24.5%</div>
            <p className="text-xs text-green-500">+2.1% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Ticket Médio</CardTitle>
            <DollarSign className="h-3 w-3 lg:h-4 lg:w-4 text-purple-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-purple-600">R$ 16.500</div>
            <p className="text-xs text-slate-500">Média geral</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Ciclo Médio</CardTitle>
            <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-orange-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-orange-600">32</div>
            <p className="text-xs text-slate-500">dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e Ações */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <select className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="all">Todos os estágios</option>
            <option value="prospecting">Prospecção</option>
            <option value="qualification">Qualificação</option>
            <option value="proposal">Proposta</option>
            <option value="negotiation">Negociação</option>
            <option value="closing">Fechamento</option>
          </select>
          <select className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="all">Todos os vendedores</option>
            <option value="ana">Ana Silva</option>
            <option value="carlos">Carlos Santos</option>
            <option value="maria">Maria Oliveira</option>
          </select>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Nova Oportunidade
        </Button>
      </div>

      {/* Pipeline Kanban - Mobile: Cards / Desktop: Colunas */}
      <div className="lg:hidden space-y-4">
        {/* Mobile: Lista de Oportunidades por Estágio */}
        {[
          {
            stage: "Prospecção",
            count: 12,
            value: "R$ 180.000",
            color: "bg-blue-100 text-blue-800",
            opportunities: [
              {
                id: 1,
                title: "Sistema ERP - TechCorp",
                client: "TechCorp Solutions",
                value: "R$ 45.000",
                probability: 20,
                days: 5,
                responsible: "Ana Silva",
                lastActivity: "Ligação realizada",
                priority: "Alta",
              },
              {
                id: 2,
                title: "Consultoria Digital - StartupXYZ",
                client: "StartupXYZ",
                value: "R$ 25.000",
                probability: 15,
                days: 12,
                responsible: "Carlos Santos",
                lastActivity: "E-mail enviado",
                priority: "Média",
              },
            ],
          },
          {
            stage: "Qualificação",
            count: 8,
            value: "R$ 120.000",
            color: "bg-yellow-100 text-yellow-800",
            opportunities: [
              {
                id: 3,
                title: "Landing Page - E-commerce Plus",
                client: "E-commerce Plus",
                value: "R$ 15.000",
                probability: 40,
                days: 8,
                responsible: "Maria Oliveira",
                lastActivity: "Reunião agendada",
                priority: "Alta",
              },
            ],
          },
          {
            stage: "Proposta",
            count: 5,
            value: "R$ 85.000",
            color: "bg-orange-100 text-orange-800",
            opportunities: [
              {
                id: 4,
                title: "CRM Completo - MegaCorp",
                client: "MegaCorp Industries",
                value: "R$ 65.000",
                probability: 70,
                days: 15,
                responsible: "Ana Silva",
                lastActivity: "Proposta enviada",
                priority: "Urgente",
              },
            ],
          },
          {
            stage: "Negociação",
            count: 3,
            value: "R$ 65.000",
            color: "bg-purple-100 text-purple-800",
            opportunities: [
              {
                id: 5,
                title: "Automação - SmartBusiness",
                client: "SmartBusiness Ltd",
                value: "R$ 35.000",
                probability: 85,
                days: 22,
                responsible: "Carlos Santos",
                lastActivity: "Negociando preço",
                priority: "Alta",
              },
            ],
          },
          {
            stage: "Fechamento",
            count: 2,
            value: "R$ 45.000",
            color: "bg-green-100 text-green-800",
            opportunities: [
              {
                id: 6,
                title: "Website Corporativo - GlobalTech",
                client: "GlobalTech Solutions",
                value: "R$ 28.000",
                probability: 95,
                days: 28,
                responsible: "Maria Oliveira",
                lastActivity: "Contrato em análise",
                priority: "Urgente",
              },
            ],
          },
        ].map((stage, stageIndex) => (
          <Card key={stageIndex}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-base lg:text-lg text-slate-900 flex items-center">
                    <Badge className={`mr-2 ${stage.color}`}>{stage.stage}</Badge>
                    <span className="text-sm text-slate-500">({stage.count})</span>
                  </CardTitle>
                  <p className="text-sm font-medium text-slate-600">{stage.value}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {stage.opportunities.map((opp) => (
                <div key={opp.id} className="border border-slate-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 text-sm">{opp.title}</h4>
                      <p className="text-xs text-slate-500">{opp.client}</p>
                    </div>
                    <Badge
                      variant={
                        opp.priority === "Urgente" ? "destructive" : opp.priority === "Alta" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {opp.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
                    <span className="font-medium text-slate-900">{opp.value}</span>
                    <span>{opp.probability}% prob.</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>{opp.responsible}</span>
                    <span>{opp.days} dias</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{opp.lastActivity}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop: Pipeline Kanban */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-6 min-h-[600px]">
          {[
            {
              stage: "Prospecção",
              count: 12,
              value: "R$ 180.000",
              color: "bg-blue-50 border-blue-200",
              headerColor: "bg-blue-100 text-blue-800",
              opportunities: [
                {
                  id: 1,
                  title: "Sistema ERP - TechCorp",
                  client: "TechCorp Solutions",
                  value: "R$ 45.000",
                  probability: 20,
                  days: 5,
                  responsible: "Ana Silva",
                  lastActivity: "Ligação realizada",
                  priority: "Alta",
                },
                {
                  id: 2,
                  title: "Consultoria Digital - StartupXYZ",
                  client: "StartupXYZ",
                  value: "R$ 25.000",
                  probability: 15,
                  days: 12,
                  responsible: "Carlos Santos",
                  lastActivity: "E-mail enviado",
                  priority: "Média",
                },
                {
                  id: 7,
                  title: "Website - LocalBiz",
                  client: "LocalBiz Store",
                  value: "R$ 12.000",
                  probability: 10,
                  days: 3,
                  responsible: "Maria Oliveira",
                  lastActivity: "Primeiro contato",
                  priority: "Baixa",
                },
              ],
            },
            {
              stage: "Qualificação",
              count: 8,
              value: "R$ 120.000",
              color: "bg-yellow-50 border-yellow-200",
              headerColor: "bg-yellow-100 text-yellow-800",
              opportunities: [
                {
                  id: 3,
                  title: "Landing Page - E-commerce Plus",
                  client: "E-commerce Plus",
                  value: "R$ 15.000",
                  probability: 40,
                  days: 8,
                  responsible: "Maria Oliveira",
                  lastActivity: "Reunião agendada",
                  priority: "Alta",
                },
                {
                  id: 8,
                  title: "App Mobile - FitnessPro",
                  client: "FitnessPro Academy",
                  value: "R$ 38.000",
                  probability: 35,
                  days: 18,
                  responsible: "Ana Silva",
                  lastActivity: "Demo apresentada",
                  priority: "Média",
                },
              ],
            },
            {
              stage: "Proposta",
              count: 5,
              value: "R$ 85.000",
              color: "bg-orange-50 border-orange-200",
              headerColor: "bg-orange-100 text-orange-800",
              opportunities: [
                {
                  id: 4,
                  title: "CRM Completo - MegaCorp",
                  client: "MegaCorp Industries",
                  value: "R$ 65.000",
                  probability: 70,
                  days: 15,
                  responsible: "Ana Silva",
                  lastActivity: "Proposta enviada",
                  priority: "Urgente",
                },
                {
                  id: 9,
                  title: "E-commerce - FashionStore",
                  client: "FashionStore Online",
                  value: "R$ 22.000",
                  probability: 60,
                  days: 10,
                  responsible: "Carlos Santos",
                  lastActivity: "Aguardando feedback",
                  priority: "Média",
                },
              ],
            },
            {
              stage: "Negociação",
              count: 3,
              value: "R$ 65.000",
              color: "bg-purple-50 border-purple-200",
              headerColor: "bg-purple-100 text-purple-800",
              opportunities: [
                {
                  id: 5,
                  title: "Automação - SmartBusiness",
                  client: "SmartBusiness Ltd",
                  value: "R$ 35.000",
                  probability: 85,
                  days: 22,
                  responsible: "Carlos Santos",
                  lastActivity: "Negociando preço",
                  priority: "Alta",
                },
                {
                  id: 10,
                  title: "Sistema Gestão - RetailChain",
                  client: "RetailChain Stores",
                  value: "R$ 55.000",
                  probability: 80,
                  days: 25,
                  responsible: "Maria Oliveira",
                  lastActivity: "Reunião com decisores",
                  priority: "Urgente",
                },
              ],
            },
            {
              stage: "Fechamento",
              count: 2,
              value: "R$ 45.000",
              color: "bg-green-50 border-green-200",
              headerColor: "bg-green-100 text-green-800",
              opportunities: [
                {
                  id: 6,
                  title: "Website Corporativo - GlobalTech",
                  client: "GlobalTech Solutions",
                  value: "R$ 28.000",
                  probability: 95,
                  days: 28,
                  responsible: "Maria Oliveira",
                  lastActivity: "Contrato em análise",
                  priority: "Urgente",
                },
                {
                  id: 11,
                  title: "Consultoria - InnovaCorp",
                  client: "InnovaCorp Ltd",
                  value: "R$ 18.000",
                  probability: 90,
                  days: 35,
                  responsible: "Ana Silva",
                  lastActivity: "Assinatura pendente",
                  priority: "Alta",
                },
              ],
            },
          ].map((stage, stageIndex) => (
            <div key={stageIndex} className={`rounded-lg border-2 ${stage.color} p-4`}>
              {/* Header da Coluna */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge className={stage.headerColor}>{stage.stage}</Badge>
                  <span className="text-sm text-slate-500">({stage.count})</span>
                </div>
                <p className="text-sm font-medium text-slate-600">{stage.value}</p>
              </div>

              {/* Cards das Oportunidades */}
              <div className="space-y-3 max-h-[500px] overflow-y-auto">
                {stage.opportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-slate-900 text-sm leading-tight">{opp.title}</h4>
                      <Badge
                        variant={
                          opp.priority === "Urgente" ? "destructive" : opp.priority === "Alta" ? "default" : "secondary"
                        }
                        className="text-xs ml-2"
                      >
                        {opp.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{opp.client}</p>
                    <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
                      <span className="font-medium text-slate-900">{opp.value}</span>
                      <span className="bg-slate-100 px-2 py-1 rounded">{opp.probability}%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                      <span>{opp.responsible}</span>
                      <span>{opp.days} dias</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">{opp.lastActivity}</p>

                    {/* Barra de Progresso */}
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-1">
                        <div
                          className="bg-blue-600 h-1 rounded-full transition-all"
                          style={{ width: `${opp.probability}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Análise e Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Gráfico de Funil */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base lg:text-lg text-slate-900">Funil de Conversão</CardTitle>
            <p className="text-sm text-slate-500">Taxa de conversão por estágio</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { stage: "Prospecção → Qualificação", rate: 67, color: "bg-blue-500" },
                { stage: "Qualificação → Proposta", rate: 63, color: "bg-yellow-500" },
                { stage: "Proposta → Negociação", rate: 60, color: "bg-orange-500" },
                { stage: "Negociação → Fechamento", rate: 67, color: "bg-purple-500" },
                { stage: "Taxa Geral de Conversão", rate: 24, color: "bg-green-500" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-700">{item.stage}</span>
                    <span className="font-medium">{item.rate}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all`}
                      style={{ width: `${item.rate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Atividades Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base lg:text-lg text-slate-900">Atividades Recentes</CardTitle>
            <p className="text-sm text-slate-500">Últimas interações no pipeline</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  action: "Proposta enviada",
                  opportunity: "CRM Completo - MegaCorp",
                  user: "Ana Silva",
                  time: "2 horas atrás",
                  type: "proposal",
                },
                {
                  action: "Reunião realizada",
                  opportunity: "Landing Page - E-commerce Plus",
                  user: "Maria Oliveira",
                  time: "4 horas atrás",
                  type: "meeting",
                },
                {
                  action: "Follow-up por e-mail",
                  opportunity: "Consultoria Digital - StartupXYZ",
                  user: "Carlos Santos",
                  time: "1 dia atrás",
                  type: "email",
                },
                {
                  action: "Ligação realizada",
                  opportunity: "Sistema ERP - TechCorp",
                  user: "Ana Silva",
                  time: "1 dia atrás",
                  type: "call",
                },
                {
                  action: "Oportunidade movida",
                  opportunity: "Automação - SmartBusiness",
                  user: "Carlos Santos",
                  time: "2 dias atrás",
                  type: "move",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 hover:bg-slate-50 rounded-lg">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === "proposal"
                        ? "bg-blue-500"
                        : activity.type === "meeting"
                          ? "bg-green-500"
                          : activity.type === "email"
                            ? "bg-yellow-500"
                            : activity.type === "call"
                              ? "bg-purple-500"
                              : "bg-slate-500"
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-600 truncate">{activity.opportunity}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-slate-500">{activity.user}</span>
                      <span className="text-xs text-slate-400">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metas e Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base lg:text-lg text-slate-900">Meta Mensal</CardTitle>
            <p className="text-sm text-slate-500">Dezembro 2024</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Realizado</span>
                <span className="text-lg font-bold text-slate-900">R$ 285.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Meta</span>
                <span className="text-lg font-bold text-blue-600">R$ 400.000</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "71%" }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">71% da meta</span>
                <span className="text-slate-500">Faltam R$ 115.000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base lg:text-lg text-slate-900">Top Performers</CardTitle>
            <p className="text-sm text-slate-500">Vendedores do mês</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Ana Silva", sales: "R$ 125.000", deals: 8, position: 1 },
                { name: "Carlos Santos", sales: "R$ 98.000", deals: 6, position: 2 },
                { name: "Maria Oliveira", sales: "R$ 62.000", deals: 4, position: 3 },
              ].map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        performer.position === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : performer.position === 2
                            ? "bg-slate-100 text-slate-800"
                            : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {performer.position}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{performer.name}</p>
                      <p className="text-xs text-slate-500">{performer.deals} negócios</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{performer.sales}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base lg:text-lg text-slate-900">Próximas Ações</CardTitle>
            <p className="text-sm text-slate-500">Tarefas prioritárias</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  task: "Follow-up MegaCorp",
                  opportunity: "CRM Completo",
                  due: "Hoje",
                  priority: "Urgente",
                },
                {
                  task: "Apresentar demo",
                  opportunity: "Sistema ERP",
                  due: "Amanhã",
                  priority: "Alta",
                },
                {
                  task: "Enviar proposta",
                  opportunity: "Website LocalBiz",
                  due: "Sexta",
                  priority: "Média",
                },
                {
                  task: "Reunião de negociação",
                  opportunity: "App Mobile",
                  due: "Próxima semana",
                  priority: "Alta",
                },
              ].map((action, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-slate-200 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{action.task}</p>
                    <p className="text-xs text-slate-500">{action.opportunity}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        action.priority === "Urgente"
                          ? "destructive"
                          : action.priority === "Alta"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs mb-1"
                    >
                      {action.priority}
                    </Badge>
                    <p className="text-xs text-slate-500">{action.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}