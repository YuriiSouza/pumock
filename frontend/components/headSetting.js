import Button from "@/components/button";
import { Download } from "lucide-react";

export default function HeadSetting() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Configurações</h2>
        <p className="text-sm lg:text-base text-slate-500">Gerencie as configurações do sistema e preferências</p>
      </div>
      <Button className="w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Exportar
      </Button>
    </div>
  )
}