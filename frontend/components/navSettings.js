"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { sideBarSettings } from "@/components/config/sideBarSettings"

export default function NavSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  return (
    <div className="border-b border-slate-200">
      <nav className="flex space-x-8 overflow-x-auto">
        {sideBarSettings.map((tab) => {
          const Icon = tab.icon
          const isActive =
            pathname === tab.url || (tab.id === "general" && pathname === "/settings")

          return (
            <button
              key={tab.id}
              onClick={() => {
                  const target = tab.id === "dashboard" ? "/init" : `${tab.url}`
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
