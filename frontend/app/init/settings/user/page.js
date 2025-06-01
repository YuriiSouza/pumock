import Avatar from "@/components/avatar/avatar";
import AvatarFallback from "@/components/avatar/avatarFallback";
import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/cards/card";
import CardContent from "@/components/cards/cardContent";
import CardHeader from "@/components/cards/cardHeader";
import CardTitle from "@/components/cards/cardTitle";
import { CheckCircle, Clock, Edit, MoreHorizontal, Shield, UserPlus, Users } from "lucide-react";


export default function UsersSettings() {
  return (

    <div className="space-y-4 lg:space-y-6">
      {/* Estatísticas de Usuários */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Total</CardTitle>
            <Users className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-slate-900">12</div>
            <p className="text-xs text-slate-500">+2 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Ativos</CardTitle>
            <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-green-600">10</div>
            <p className="text-xs text-green-500">83%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Admins</CardTitle>
            <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-purple-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-purple-600">3</div>
            <p className="text-xs text-slate-500">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 lg:p-6 lg:pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium text-slate-600">Login</CardTitle>
            <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-orange-600" />
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <div className="text-lg lg:text-2xl font-bold text-orange-600">2h</div>
            <p className="text-xs text-slate-500">Ana</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Usuários */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-base lg:text-lg text-slate-900">Usuários do Sistema</CardTitle>
              <p className="text-sm text-slate-500">Gerencie usuários e suas permissões</p>
            </div>
            <Button className="w-full sm:w-auto">
              <UserPlus className="h-4 w-4 mr-2" />
              Novo
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-slate-100">
            {[
              {
                name: "Ana Silva",
                email: "ana@pumock.com",
                role: "Administrador",
                status: "Ativo",
                lastLogin: "2 horas atrás",
              },
              {
                name: "Carlos Santos",
                email: "carlos@pumock.com",
                role: "Vendedor",
                status: "Ativo",
                lastLogin: "1 dia atrás",
              },
              {
                name: "Maria Oliveira",
                email: "maria@pumock.com",
                role: "Gerente",
                status: "Ativo",
                lastLogin: "3 horas atrás",
              },
              {
                name: "João Costa",
                email: "joao@pumock.com",
                role: "Vendedor",
                status: "Inativo",
                lastLogin: "1 semana atrás",
              },
            ].map((user, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex space-x-2">
                    <Badge variant={user.role === "Administrador" ? "default" : "secondary"} className="text-xs">
                      {user.role}
                    </Badge>
                    <Badge
                      variant={user.status === "Ativo" ? "default" : "secondary"}
                      className={user.status === "Ativo" ? "bg-green-100 text-green-800" : ""}
                    >
                      {user.status}
                    </Badge>
                  </div>
                  <span className="text-slate-500">{user.lastLogin}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-medium text-slate-600">Usuário</th>
                  <th className="text-left p-4 font-medium text-slate-600">E-mail</th>
                  <th className="text-left p-4 font-medium text-slate-600">Função</th>
                  <th className="text-left p-4 font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 font-medium text-slate-600">Último Login</th>
                  <th className="text-left p-4 font-medium text-slate-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    name: "Ana Silva",
                    email: "ana@pumock.com",
                    role: "Administrador",
                    status: "Ativo",
                    lastLogin: "2 horas atrás",
                  },
                  {
                    name: "Carlos Santos",
                    email: "carlos@pumock.com",
                    role: "Vendedor",
                    status: "Ativo",
                    lastLogin: "1 dia atrás",
                  },
                  {
                    name: "Maria Oliveira",
                    email: "maria@pumock.com",
                    role: "Gerente",
                    status: "Ativo",
                    lastLogin: "3 horas atrás",
                  },
                  {
                    name: "João Costa",
                    email: "joao@pumock.com",
                    role: "Vendedor",
                    status: "Inativo",
                    lastLogin: "1 semana atrás",
                  },
                ].map((user, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-slate-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">{user.email}</td>
                    <td className="p-4">
                      <Badge variant={user.role === "Administrador" ? "default" : "secondary"}>{user.role}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={user.status === "Ativo" ? "default" : "secondary"}
                        className={user.status === "Ativo" ? "bg-green-100 text-green-800" : ""}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-slate-600">{user.lastLogin}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Funções e Permissões */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base lg:text-lg text-slate-900">Funções e Permissões</CardTitle>
          <p className="text-sm text-slate-500">Configure as permissões para cada função</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                role: "Administrador",
                users: 3,
                permissions: ["Acesso total", "Gerenciar usuários", "Configurações", "Relatórios"],
                color: "bg-red-100 text-red-800",
              },
              {
                role: "Gerente",
                users: 2,
                permissions: ["Dashboard", "Clientes", "Vendas", "Relatórios"],
                color: "bg-blue-100 text-blue-800",
              },
              {
                role: "Vendedor",
                users: 7,
                permissions: ["Dashboard", "Clientes", "Pipeline", "Tarefas"],
                color: "bg-green-100 text-green-800",
              },
            ].map((role, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-slate-900 text-sm lg:text-base">{role.role}</h4>
                  <Badge className={role.color}>{role.users}</Badge>
                </div>
                <div className="space-y-2">
                  {role.permissions.map((permission, permIndex) => (
                    <div key={permIndex} className="flex items-center text-xs lg:text-sm text-slate-600">
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-500 mr-2 flex-shrink-0" />
                      {permission}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Editar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}