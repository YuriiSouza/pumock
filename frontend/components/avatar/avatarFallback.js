export default function AvatarFallback({
  children, 
  className
  }){
    return (
      <div
        className={`flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-slate-600 text-sm font-medium ${className}`}
      >
        {children}
      </div>
    )
}
