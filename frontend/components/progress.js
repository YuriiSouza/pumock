export default function Progress({
  value, 
  className
  }){
    return (
      <div className={`relative h-2 w-full overflow-hidden rounded-full bg-slate-100 ${className}`}>
        <div className="h-full bg-blue-600 transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    )
}
