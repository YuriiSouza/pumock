export default function Avatar({
  children,
  src,
  className = "",
  }){
    return (
      <div className={`relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full ${className}`}>
        {src ? <img src={src || "/placeholder.svg"} alt="" className="aspect-square h-full w-full" /> : children}
      </div>
    )
}
