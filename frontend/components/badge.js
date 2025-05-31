export default function Badge({
  children,
  variant = "default",
  className = "",
  }){
    const variants = {
      default: "bg-blue-100 text-blue-800",
      secondary: "bg-slate-100 text-slate-800",
      destructive: "bg-red-100 text-red-800",
    }

    return (
      <div
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    )
}
