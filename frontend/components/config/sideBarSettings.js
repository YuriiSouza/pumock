import {
  Shield,
  Users,
  Bell,
  Upload,
  DollarSign,
  Zap,
  Settings,
} from "lucide-react"

export const sideBarSettings = [
  { id: "general", label: "Geral", icon: Settings, url: "/init/settings/general"  },
  { id: "users", label: "Usuários", icon: Users, url: "/init/settings/user"  },
  { id: "security", label: "Segurança", icon: Shield, url: "/init/settings/security"  },
  { id: "notifications", label: "Notificações", icon: Bell, url: "/init/settings/notifications"  },
  { id: "integrations", label: "Integrações", icon: Zap, url: "/init/settings/integrations"  },
  { id: "billing", label: "Faturamento", icon: DollarSign, url: "/init/settings/billing"  },
  { id: "backup", label: "Backup", icon: Upload, url: "/init/settings/backup"  },
  { id: "system", label: "Sistema", icon: Settings, url: "/init/settings/system"  },
]
