"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { sidebarItems } from "./config/sidebaritens"
import { X } from "lucide-react"

export default function Nav({
  sidebarOpen,
  setSidebarOpen
}) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Pumock</h1>
              <p className="text-sm text-slate-500">Gestão de relacionamento</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive =
              pathname === `${item.url}` || (item.id === "dashboard" && pathname === "/init")

            return (
              <button
                key={item.id}
                onClick={() => {
                  const target = item.id === "dashboard" ? "/init" : `${item.url}`
                  router.push(target)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
