import Button from "@/components/button";
import { Download } from "lucide-react";

export default function HeadSetting() {
  return (
    <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Configurações</h2>
          <p className="text-slate-500">Gerencie as configurações do sistema e preferências</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Exportar Configurações
        </Button>
      </div>
  )
}