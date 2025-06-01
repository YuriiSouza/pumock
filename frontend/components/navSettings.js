"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { sideBarSettings } from "@/components/config/sideBarSettings"

export default function NavSettings() {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("")

  // Atualiza o tab selecionado ao carregar a rota
  useEffect(() => {
    const currentTab =
      sideBarSettings.find(tab => pathname === tab.url || (tab.id === "general" && pathname === "/settings"))?.id || ""

    setSelectedTab(currentTab)
  }, [pathname])

  const handleChange = (e) => {
    const tabId = e.target.value
    const tab = sideBarSettings.find(t => t.id === tabId)

    if (tab) {
      const target = tab.id === "dashboard" ? "/init" : tab.url
      setSelectedTab(tabId)
      router.push(target)
      setSidebarOpen(false)
    }
  }

  return (
    <div className="lg:border-b lg:border-slate-200">
      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <select
          value={selectedTab}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {sideBarSettings.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs */}
      <nav className="hidden lg:flex space-x-8 overflow-x-auto">
        {sideBarSettings.map((tab) => {
          const Icon = tab.icon
          const isActive =
            pathname === tab.url || (tab.id === "general" && pathname === "/settings")

          return (
            <button
              key={tab.id}
              onClick={() => {
                const target = tab.id === "dashboard" ? "/init" : tab.url
                router.push(target)
                setSidebarOpen(false)
              }}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                isActive
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
