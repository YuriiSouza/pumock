"use client"

import { useState } from "react"
import Header from "@/components/header"
import Nav from "@/components/nav"

export default function CRMLayout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50" onClick={() => setDropdownOpen(null)}>
      <div className="flex">
        <Nav 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex-1 lg:ml-0">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen} 
          />
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
