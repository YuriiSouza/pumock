import {
  BarChart3,
  Users,
  Target,
  Calendar,
  DollarSign,
  Package,
  ShoppingCart,
  Truck,
  FileText,
  Settings,
} from "lucide-react"

export const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "clients", label: "Clientes", icon: Users },
  { id: "pipeline", label: "Pipeline", icon: Target },
  { id: "financial", label: "Financeiro", icon: DollarSign },
  { id: "inventory", label: "Estoque", icon: Package },
  { id: "sales", label: "Vendas", icon: ShoppingCart },
  { id: "suppliers", label: "Fornecedores", icon: Truck },
  { id: "reports", label: "Relatórios", icon: FileText },
  { id: "tasks", label: "Tarefas", icon: Calendar },
  { id: "settings", label: "Configurações", icon: Settings },
]