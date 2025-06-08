"use client"

import { useState } from "react"
import { X, Calendar, Users, Flag, FileText } from "lucide-react"


export function TaskModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Média",
    dueDate: "",
    assignee: "Você",
    client: "",
    type: "general",
    tags: [],
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    setFormData({
      title: "",
      description: "",
      priority: "Média",
      dueDate: "",
      assignee: "Você",
      client: "",
      type: "general",
      tags: [],
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Nova Tarefa</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Título da Tarefa *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Ligar para cliente ABC"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Descreva os detalhes da tarefa..."
            />
          </div>

          {/* Grid de campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prioridade */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Flag className="h-4 w-4 inline mr-1" />
                Prioridade
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>

            {/* Data de Vencimento */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Data de Vencimento
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Responsável */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Users className="h-4 w-4 inline mr-1" />
                Responsável
              </label>
              <select
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Você">Você</option>
                <option value="Ana Silva">Ana Silva</option>
                <option value="Carlos Santos">Carlos Santos</option>
                <option value="Maria Oliveira">Maria Oliveira</option>
                <option value="João Costa">João Costa</option>
              </select>
            </div>

            {/* Cliente */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Cliente (Opcional)</label>
              <select
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione um cliente</option>
                <option value="Tech Solutions">Tech Solutions</option>
                <option value="Digital Corp">Digital Corp</option>
                <option value="StartUp Inc">StartUp Inc</option>
                <option value="Enterprise Ltd">Enterprise Ltd</option>
                <option value="Fornecedor ABC">Fornecedor ABC</option>
              </select>
            </div>
          </div>

          {/* Tipo de Tarefa */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <FileText className="h-4 w-4 inline mr-1" />
              Tipo de Tarefa
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: "call", label: "Ligação", icon: "📞" },
                { value: "email", label: "E-mail", icon: "📧" },
                { value: "meeting", label: "Reunião", icon: "🤝" },
                { value: "document", label: "Documento", icon: "📄" },
                { value: "presentation", label: "Apresentação", icon: "📊" },
                { value: "research", label: "Pesquisa", icon: "🔍" },
                { value: "follow-up", label: "Follow-up", icon: "🔄" },
                { value: "general", label: "Geral", icon: "📋" },
              ].map((type) => (
                <label
                  key={type.value}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.type === type.value ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    value={type.value}
                    checked={formData.type === type.value}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="sr-only"
                  />
                  <span className="text-lg mr-2">{type.icon}</span>
                  <span className="text-sm font-medium">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Criar Tarefa
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
