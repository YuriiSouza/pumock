
import Link from "next/link"
import {
  Users,
  Target,
  Calendar,
  TrendingUp,
  DollarSign,
  Phone,
  Mail,
} from "lucide-react"
import Card from "@/components/cards/card"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"
import CardTitle from "@/components/cards/cardTitle"
import Progress from "@/components/progress"
import Badge from "@/components/badge"

const pipelineStages = [
  { name: "Prospecção", count: 12, value: "R$ 180.000" },
  { name: "Qualificação", count: 8, value: "R$ 120.000" },
  { name: "Proposta", count: 5, value: "R$ 85.000" },
  { name: "Negociação", count: 3, value: "R$ 65.000" },
  { name: "Fechamento", count: 2, value: "R$ 45.000" },
]

  const tasks = [
  { id: 1, title: "Ligar para Ana Silva", priority: "Alta", due: "Hoje", type: "call" },
  { id: 2, title: "Enviar proposta para Tech Solutions", priority: "Média", due: "Amanhã", type: "email" },
  { id: 3, title: "Reunião com Digital Corp", priority: "Alta", due: "Sexta", type: "meeting" },
  { id: 4, title: "Follow-up StartUp Inc", priority: "Baixa", due: "Próxima semana", type: "call" },
]

export default function Dashboard(){
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Clientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">125</div>
              <p className="text-xs text-green-600">+5% este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Novas Vendas</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">R$ 45.000</div>
              <p className="text-xs text-green-600">+10% vs semana passada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Taxa de Conversão</CardTitle>
              <Target className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">18%</div>
              <p className="text-xs text-blue-600">+2% este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">MRR</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">R$ 250.000</div>
              <p className="text-xs text-slate-500">Receita Recorrente Mensal</p>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline e Atividades Recentes */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Pipeline de Vendas</CardTitle>
              <p className="text-slate-500 text-sm">Visão geral do funil de vendas</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {pipelineStages.map((stage, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{stage.name}</span>
                    <span className="text-sm text-slate-500">{stage.count} leads</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Progress value={(stage.count / 12) * 100} className="flex-1 mr-2" />
                    <span className="text-sm font-semibold text-slate-900">{stage.value}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Tarefas Prioritárias</CardTitle>
              <p className="text-slate-500 text-sm">Suas próximas atividades</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks.slice(0, 4).map((task) => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <div className="flex-shrink-0">
                    {task.type === "call" && <Phone className="h-4 w-4 text-blue-600" />}
                    {task.type === "email" && <Mail className="h-4 w-4 text-green-600" />}
                    {task.type === "meeting" && <Calendar className="h-4 w-4 text-purple-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{task.title}</p>
                    <p className="text-xs text-slate-500">{task.due}</p>
                  </div>
                  <Badge
                    variant={
                      task.priority === "Alta" ? "destructive" : task.priority === "Média" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    )
}
