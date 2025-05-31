import {
  BarChart3,
  Users,
  Target,
  Calendar,
  Bell,
  DollarSign,
  Package,
  ShoppingCart,
  Truck,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react"
import { sidebarItems } from "./config/sidebaritens"
import Button from "@/components/button"
import Avatar from "@/components/avatar/avatar"
import AvatarFallback from "@/components/avatar/avatar"


export default function Header(
  {
    activeTab,
    setActiveTab
  })
  {

    return (
      <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-slate-100">
              <Menu className="h-6 w-6 text-slate-600" />
            </button>
            <h2 className="text-lg font-semibold text-slate-900">
              {sidebarItems.find((item) => item.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-blue-100 text-blue-600">AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>  
    )
}
