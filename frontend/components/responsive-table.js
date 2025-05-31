"use client"

import React from "react"

export function ResponsiveTable({ children, className = "" }) {
  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0">
      <div className="inline-block min-w-full align-middle px-4 lg:px-0">
        <div className={`overflow-hidden ${className}`}>{children}</div>
      </div>
    </div>
  )
}
