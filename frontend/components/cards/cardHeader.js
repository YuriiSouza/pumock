export default function CardHeader({
  children, 
  className
  }){
    return (
      <div className={`p-6 pb-2 ${className}`}>{children}</div>  
    )
}
