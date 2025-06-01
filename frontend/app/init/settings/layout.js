"use client"

import HeadSetting from "@/components/headSetting"
import NavSettings from "@/components/navSettings"
import { useState } from "react"

export default function SettingsLayout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
      <div className="flex-1">
        <HeadSetting />
        <div className="flex-1 lg:ml-0">
          <NavSettings />
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
  )
}
