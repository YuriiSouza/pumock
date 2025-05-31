"use client"

import { useState } from "react"
import { Filter, X, Calendar, Users, Flag, Search } from "lucide-react"

interface TaskFiltersProps {
  isOpen: boolean
  onClose: () => void
  onApplyFilters: (filters: any) => void
}

export function TaskFilters({ isOpen, onClose, onApplyFilters }: TaskFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    priority: "all",
    assignee: "all",
    client: "all",
    dateRange: "all",
    type: "all",
  })

  if (!isOpen) return null

  const handleApply = () => {
    onApplyFilters(filters)
    onClose()
  }

  const handleReset = () => {
    setFilters({
      search: "",
      status: "all",
      priority: "all",
      assignee: "all",
      client: "all",
      dateRange: "all",
      type: "all",
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filtros Avançados
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 space-y-6">
          {/* Busca */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Search className="h-4 w-4 inline mr-1" />
              Buscar
            </label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar por título ou descrição..."
            />
          </div>

          {/* Grid de filtros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos os status</option>
                <option value="todo">A Fazer</option>
                <option value="progress">Em Progresso</option>
                <option value="completed">Concluídas</option>
                <option value="overdue">Atrasadas</option>
              </select>
            </div>

            {/* Prioridade */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Flag className="h-4 w-4 inline mr-1" />
                Prioridade
              </label>
              <select
                value={filters.priority}
                onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todas as prioridades</option>
                <option value="Urgente">Urgente</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
            </div>

            {/* Responsável */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Users className="h-4 w-4 inline mr-1" />
                Responsável
              </label>
              <select
                value={filters.assignee}
                onChange={(e) => setFilters({ ...filters, assignee: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos os responsáveis</option>
                <option value="Você">Você</option>
                <option value="Ana Silva">Ana Silva</option>
                <option value="Carlos Santos">Carlos Santos</option>
                <option value="Maria Oliveira">Maria Oliveira</option>
                <option value="João Costa">João Costa</option>
              </select>
            </div>

            {/* Cliente */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Cliente</label>
              <select
                value={filters.client}
                onChange={(e) => setFilters({ ...filters, client: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos os clientes</option>
                <option value="Tech Solutions">Tech Solutions</option>
                <option value="Digital Corp">Digital Corp</option>
                <option value="StartUp Inc">StartUp Inc</option>
                <option value="Enterprise Ltd">Enterprise Ltd</option>
                <option value="Fornecedor ABC">Fornecedor ABC</option>
              </select>
            </div>

            {/* Período */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Período
              </label>
              <select
                value={filters.dateRange}
                onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos os períodos</option>
                <option value="today">Hoje</option>
                <option value="tomorrow">Amanhã</option>
                <option value="week">Esta semana</option>
                <option value="month">Este mês</option>
                <option value="overdue">Atrasadas</option>
              </select>
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Tarefa</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos os tipos</option>
                <option value="call">Ligação</option>
                <option value="email">E-mail</option>
                <option value="meeting">Reunião</option>
                <option value="document">Documento</option>
                <option value="presentation">Apresentação</option>
                <option value="research">Pesquisa</option>
                <option value="follow-up">Follow-up</option>
                <option value="general">Geral</option>
              </select>
            </div>
          </div>

          {/* Filtros ativos */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-slate-700 mb-2">Filtros Ativos:</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (value && value !== "all" && value !== "") {
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {key}: {value}
                      <button
                        onClick={() => setFilters({ ...filters, [key]: key === "search" ? "" : "all" })}
                        className="ml-1 hover:text-blue-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )
                }
                return null
              })}
              {Object.values(filters).every((value) => !value || value === "all") && (
                <span className="text-sm text-slate-500">Nenhum filtro ativo</span>
              )}
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-slate-200">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Limpar Filtros
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  )
}
