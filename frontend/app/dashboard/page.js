"use client"

import { useState, useEffect } from "react"
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
  X,
} from "lucide-react"
import Avatar from "@/components/avatar/avatar"
import AvatarFallback from "@/components/avatar/avatarFallback"
import Button from "@/components/button"
import Dashboard from "@/components/pages/dashboard"
import Clients from "@/components/pages/clients"
import Financial from "@/components/pages/financial"
import Inventory from "@/components/pages/inventory"
import Sales from "@/components/pages/sales"
import Suppliers from "@/components/pages/suppliers"
import Reports from "@/components/pages/reports"
import Header from "@/components/header"
import Nav from "@/components/nav"
import Tasks from "@/components/pages/tasks"

export default function CRMDashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeTab") || "dashboard"
    }
    return "dashboard"
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", activeTab)
    }
  }, [activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return Dashboard()
      case "clients":
        return <Clients dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      case "financial":
        return Financial()
      case "inventory":
        return Inventory()
      case "sales":
        return <Sales dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      case "suppliers":
          return <Suppliers dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      case "reports":
        return Reports()
      case "pipeline":
        return <div className="text-center py-12 text-slate-500">Pipeline em desenvolvimento</div>
      case "tasks":
        return Tasks()
      case "settings":
        return <div className="text-center py-12 text-slate-500">Configurações em desenvolvimento</div>
      default:
        return Dashboard()
    }
  }

  return (
    <div className="min-h-screen bg-slate-50" onClick={() => setDropdownOpen(null)}>
      <div className="flex">
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Content */}
          <main className="p-4 lg:p-6">{renderContent()}</main>
        </div>
      </div>
    </div>
  )
}
