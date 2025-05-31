"use client"

import {
  BarChart3,
  Filter,
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  Phone,
  FileText,
  UsersIcon,
  Search,
  Mail
} from "lucide-react"
import Button from "@/components/button"
import Progress from "@/components/progress"
import Avatar from "@/components/avatar/avatar"
import AvatarFallback from "@/components/avatar/avatarFallback"
import Badge from "@/components/badge"
import Card from "@/components/cards/card"
import CardTitle from "@/components/cards/cardTitle"
import CardContent from "@/components/cards/cardContent"
import CardHeader from "@/components/cards/cardHeader"


const tasks = [
    { id: 1, title: "Ligar para Ana Silva", priority: "Alta", due: "Hoje", type: "call" },
    { id: 2, title: "Enviar proposta para Tech Solutions", priority: "Média", due: "Amanhã", type: "email" },
    { id: 3, title: "Reunião com Digital Corp", priority: "Alta", due: "Sexta", type: "meeting" },
    { id: 4, title: "Follow-up StartUp Inc", priority: "Baixa", due: "Próxima semana", type: "call" },
  ]

  export default function Tasks() {
    return (
      <div className="space-y-6">
        {/* Header com filtros e ações */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Tarefas</h2>
            <p className="text-slate-500">Gerencie suas atividades e acompanhe o progresso</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Nova Tarefa
            </Button>
          </div>
        </div>

        {/* Estatísticas das tarefas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total de Tarefas</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">24</div>
              <p className="text-xs text-slate-500">+3 esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">8</div>
              <p className="text-xs text-orange-500">2 vencendo hoje</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Concluídas</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">16</div>
              <p className="text-xs text-green-500">67% de conclusão</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Atrasadas</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-red-500">Requer atenção</p>
            </CardContent>
          </Card>
        </div>

        {/* Filtros rápidos */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
            Todas
          </Button>
          <Button variant="outline" size="sm">
            Hoje
          </Button>
          <Button variant="outline" size="sm">
            Esta Semana
          </Button>
          <Button variant="outline" size="sm">
            Atrasadas
          </Button>
          <Button variant="outline" size="sm">
            Alta Prioridade
          </Button>
          <Button variant="outline" size="sm">
            Minhas Tarefas
          </Button>
        </div>

        {/* Lista de tarefas */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Coluna: A Fazer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <div className="w-3 h-3 bg-slate-400 rounded-full mr-2"></div>A Fazer
                <Badge variant="secondary" className="ml-2">
                  8
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  id: 1,
                  title: "Ligar para Ana Silva",
                  description: "Follow-up da proposta enviada na semana passada",
                  priority: "Alta",
                  dueDate: "Hoje",
                  assignee: "Você",
                  type: "call",
                  client: "Tech Solutions",
                },
                {
                  id: 2,
                  title: "Preparar apresentação Q4",
                  description: "Slides para reunião com diretoria",
                  priority: "Média",
                  dueDate: "Amanhã",
                  assignee: "Você",
                  type: "presentation",
                  client: null,
                },
                {
                  id: 3,
                  title: "Revisar contrato Digital Corp",
                  description: "Análise dos termos e condições",
                  priority: "Alta",
                  dueDate: "Sexta",
                  assignee: "João",
                  type: "document",
                  client: "Digital Corp",
                },
              ].map((task) => (
                <div
                  key={task.id}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 text-sm">{task.title}</h4>
                        {task.client && <p className="text-xs text-blue-600 mt-1">{task.client}</p>}
                      </div>
                    </div>
                    <div className="relative">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">{task.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          task.priority === "Alta" ? "destructive" : task.priority === "Média" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-xs text-slate-500">{task.dueDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {task.type === "call" && <Phone className="h-3 w-3 text-blue-600" />}
                      {task.type === "email" && <Mail className="h-3 w-3 text-green-600" />}
                      {task.type === "presentation" && <FileText className="h-3 w-3 text-purple-600" />}
                      {task.type === "document" && <FileText className="h-3 w-3 text-orange-600" />}
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                          {task.assignee === "Você" ? "V" : "J"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Coluna: Em Progresso */}
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Em Progresso
                <Badge variant="default" className="ml-2 bg-blue-100 text-blue-800">
                  3
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  id: 4,
                  title: "Reunião com StartUp Inc",
                  description: "Apresentação da proposta de CRM",
                  priority: "Alta",
                  dueDate: "Hoje 14h",
                  assignee: "Você",
                  type: "meeting",
                  client: "StartUp Inc",
                  progress: 60,
                },
                {
                  id: 5,
                  title: "Análise de mercado Q4",
                  description: "Pesquisa de concorrentes e tendências",
                  priority: "Média",
                  dueDate: "Esta semana",
                  assignee: "Maria",
                  type: "research",
                  client: null,
                  progress: 30,
                },
              ].map((task) => (
                <div
                  key={task.id}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 text-sm">{task.title}</h4>
                        {task.client && <p className="text-xs text-blue-600 mt-1">{task.client}</p>}
                      </div>
                    </div>
                    <div className="relative">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">{task.description}</p>

                  {task.progress && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>Progresso</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          task.priority === "Alta" ? "destructive" : task.priority === "Média" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-xs text-slate-500">{task.dueDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {task.type === "meeting" && <UsersIcon className="h-3 w-3 text-purple-600" />}
                      {task.type === "research" && <Search className="h-3 w-3 text-green-600" />}
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                          {task.assignee === "Você" ? "V" : "M"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Coluna: Concluídas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Concluídas
                <Badge variant="default" className="ml-2 bg-green-100 text-green-800">
                  5
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  id: 6,
                  title: "Enviar proposta Tech Solutions",
                  description: "Proposta comercial para novo projeto",
                  priority: "Alta",
                  completedDate: "Ontem",
                  assignee: "Você",
                  type: "email",
                  client: "Tech Solutions",
                },
                {
                  id: 7,
                  title: "Atualizar CRM com novos leads",
                  description: "Importação de dados da campanha",
                  priority: "Baixa",
                  completedDate: "2 dias atrás",
                  assignee: "Carlos",
                  type: "data",
                  client: null,
                },
                {
                  id: 8,
                  title: "Follow-up Enterprise Ltd",
                  description: "Ligação de acompanhamento pós-venda",
                  priority: "Média",
                  completedDate: "3 dias atrás",
                  assignee: "Ana",
                  type: "call",
                  client: "Enterprise Ltd",
                },
              ].map((task) => (
                <div
                  key={task.id}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked
                        className="rounded border-slate-300 text-green-600 focus:ring-green-500"
                        readOnly
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 text-sm line-through">{task.title}</h4>
                        {task.client && <p className="text-xs text-green-600 mt-1">{task.client}</p>}
                      </div>
                    </div>
                    <div className="relative">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">{task.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                        Concluída
                      </Badge>
                      <span className="text-xs text-slate-500">{task.completedDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {task.type === "call" && <Phone className="h-3 w-3 text-green-600" />}
                      {task.type === "email" && <Mail className="h-3 w-3 text-green-600" />}
                      {task.type === "data" && <BarChart3 className="h-3 w-3 text-green-600" />}
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-green-100 text-green-600 text-xs">
                          {task.assignee === "Você" ? "V" : task.assignee === "Carlos" ? "C" : "A"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Seção de tarefas atrasadas */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Tarefas Atrasadas
              <Badge variant="destructive" className="ml-2">
                3
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  id: 9,
                  title: "Revisar contrato Fornecedor ABC",
                  description: "Análise de renovação de contrato",
                  daysLate: 2,
                  assignee: "Você",
                  client: "Fornecedor ABC",
                },
                {
                  id: 10,
                  title: "Relatório mensal de vendas",
                  description: "Consolidação dos dados de outubro",
                  daysLate: 1,
                  assignee: "Maria",
                  client: null,
                },
                {
                  id: 11,
                  title: "Follow-up Digital Corp",
                  description: "Retorno sobre proposta enviada",
                  daysLate: 3,
                  assignee: "João",
                  client: "Digital Corp",
                },
              ].map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200"
                >
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-red-300 text-red-600 focus:ring-red-500" />
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">{task.title}</h4>
                      <p className="text-xs text-slate-600">{task.description}</p>
                      {task.client && <p className="text-xs text-red-600 mt-1">{task.client}</p>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="destructive" className="text-xs">
                      {task.daysLate} dia{task.daysLate > 1 ? "s" : ""} atrasada
                    </Badge>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-red-100 text-red-600 text-xs">
                        {task.assignee === "Você" ? "V" : task.assignee === "Maria" ? "M" : "J"}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Calendário de tarefas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">Calendário de Tarefas</CardTitle>
            <p className="text-slate-500 text-sm">Visão geral das próximas atividades</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {[
                { day: "Seg", date: "04", tasks: 2, isToday: false },
                { day: "Ter", date: "05", tasks: 4, isToday: true },
                { day: "Qua", date: "06", tasks: 1, isToday: false },
                { day: "Qui", date: "07", tasks: 3, isToday: false },
                { day: "Sex", date: "08", tasks: 2, isToday: false },
                { day: "Sáb", date: "09", tasks: 0, isToday: false },
                { day: "Dom", date: "10", tasks: 1, isToday: false },
              ].map((day, index) => (
                <div
                  key={index}
                  className={`text-center p-3 rounded-lg border ${
                    day.isToday ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200 hover:bg-slate-50"
                  } transition-colors cursor-pointer`}
                >
                  <div className="text-xs text-slate-500 mb-1">{day.day}</div>
                  <div className={`text-lg font-semibold mb-2 ${day.isToday ? "text-blue-600" : "text-slate-900"}`}>
                    {day.date}
                  </div>
                  {day.tasks > 0 && (
                    <div
                      className={`text-xs px-2 py-1 rounded-full ${
                        day.isToday ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {day.tasks} tarefa{day.tasks > 1 ? "s" : ""}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }