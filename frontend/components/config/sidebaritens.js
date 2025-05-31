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
  { id: "dashboard", label: "Dashboard", icon: BarChart3, url: "/init/init" },
  { id: "clients", label: "Clientes", icon: Users, url: "/init/clients"  },
  { id: "pipeline", label: "Pipeline", icon: Target, url: "/init/pipeline"  },
  { id: "financial", label: "Financeiro", icon: DollarSign, url: "/init/financial"  },
  { id: "inventory", label: "Estoque", icon: Package, url: "/init/inventory"  },
  { id: "sales", label: "Vendas", icon: ShoppingCart, url: "/init/sales"  },
  { id: "suppliers", label: "Fornecedores", icon: Truck, url: "/init/suppliers"  },
  { id: "reports", label: "Relatórios", icon: FileText, url: "/init/report"  },
  { id: "tasks", label: "Tarefas", icon: Calendar, url: "/init/tasks"  },
  { id: "settings", label: "Configurações", icon: Settings, url: "./settings"  },
]