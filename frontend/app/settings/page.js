const renderGeneralSettings = () => (
    <div className="space-y-6">
      {/* Informações da Empresa */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Informações da Empresa</CardTitle>
          <p className="text-slate-500 text-sm">Configure os dados básicos da sua empresa</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nome da Empresa</label>
              <Input placeholder="Pumock Tecnologia" defaultValue="Pumock Tecnologia" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">CNPJ</label>
              <Input placeholder="00.000.000/0001-00" defaultValue="12.345.678/0001-90" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
              <Input placeholder="contato@pumock.com" defaultValue="contato@pumock.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
              <Input placeholder="(11) 9999-9999" defaultValue="(11) 9999-9999" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Endereço</label>
              <Input
                placeholder="Rua das Empresas, 123 - São Paulo, SP"
                defaultValue="Rua das Empresas, 123 - São Paulo, SP"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salvar Alterações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Configurações Regionais */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Configurações Regionais</CardTitle>
          <p className="text-slate-500 text-sm">Defina idioma, fuso horário e formato de dados</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Idioma</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Fuso Horário</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                <option value="America/New_York">New York (GMT-5)</option>
                <option value="Europe/London">London (GMT+0)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Moeda</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="BRL">Real (R$)</option>
                <option value="USD">Dólar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salvar Alterações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Tema e Aparência */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Tema e Aparência</CardTitle>
          <p className="text-slate-500 text-sm">Personalize a aparência do sistema</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Tema</label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="radio" name="theme" value="light" defaultChecked className="mr-3" />
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white border-2 border-slate-300 rounded mr-3"></div>
                    <span>Claro</span>
                  </div>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="theme" value="dark" className="mr-3" />
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-slate-800 border-2 border-slate-600 rounded mr-3"></div>
                    <span>Escuro</span>
                  </div>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="theme" value="auto" className="mr-3" />
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-white to-slate-800 border-2 border-slate-300 rounded mr-3"></div>
                    <span>Automático</span>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Cor Principal</label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { color: "bg-blue-600", name: "Azul" },
                  { color: "bg-green-600", name: "Verde" },
                  { color: "bg-purple-600", name: "Roxo" },
                  { color: "bg-red-600", name: "Vermelho" },
                  { color: "bg-orange-600", name: "Laranja" },
                  { color: "bg-pink-600", name: "Rosa" },
                  { color: "bg-indigo-600", name: "Índigo" },
                  { color: "bg-teal-600", name: "Teal" },
                ].map((color, index) => (
                  <label key={index} className="flex flex-col items-center cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value={color.name}
                      defaultChecked={index === 0}
                      className="sr-only"
                    />
                    <div
                      className={`w-8 h-8 ${color.color} rounded-full border-2 border-transparent hover:border-slate-300 transition-colors`}
                    ></div>
                    <span className="text-xs mt-1">{color.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Aplicar Tema</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderUsersSettings = () => (
    <div className="space-y-6">
      {/* Estatísticas de Usuários */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <p className="text-xs text-slate-500">+2 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Ativos</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">10</div>
            <p className="text-xs text-green-500">83% do total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Administradores</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <p className="text-xs text-slate-500">Acesso total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Último Login</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">2h</div>
            <p className="text-xs text-slate-500">Ana Silva</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Usuários */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-slate-900">Usuários do Sistema</CardTitle>
              <p className="text-slate-500 text-sm">Gerencie usuários e suas permissões</p>
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Novo Usuário
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
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
          <CardTitle className="text-slate-900">Funções e Permissões</CardTitle>
          <p className="text-slate-500 text-sm">Configure as permissões para cada função</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <h4 className="font-semibold text-slate-900">{role.role}</h4>
                  <Badge className={role.color}>{role.users} usuários</Badge>
                </div>
                <div className="space-y-2">
                  {role.permissions.map((permission, permIndex) => (
                    <div key={permIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {permission}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Editar Permissões
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      {/* Status de Segurança */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Status de Segurança: Excelente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">2FA Ativado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">SSL Configurado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">Backup Automático</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">Logs Ativos</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Autenticação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Autenticação e Acesso</CardTitle>
          <p className="text-slate-500 text-sm">Configure políticas de senha e autenticação</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Política de Senhas</h4>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">Mínimo 8 caracteres</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">Incluir números</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">Incluir símbolos</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm">Expiração em 90 dias</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Autenticação de Dois Fatores</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-green-800">2FA Ativado</span>
                  <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Configurar 2FA
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salvar Configurações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Logs de Segurança */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Logs de Segurança</CardTitle>
          <p className="text-slate-500 text-sm">Monitore atividades suspeitas e acessos</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                event: "Login bem-sucedido",
                user: "Ana Silva",
                ip: "192.168.1.100",
                time: "2 min atrás",
                type: "success",
              },
              {
                event: "Tentativa de login falhada",
                user: "Desconhecido",
                ip: "203.0.113.1",
                time: "1 hora atrás",
                type: "warning",
              },
              {
                event: "Alteração de senha",
                user: "Carlos Santos",
                ip: "192.168.1.101",
                time: "3 horas atrás",
                type: "info",
              },
              {
                event: "Login bem-sucedido",
                user: "Maria Oliveira",
                ip: "192.168.1.102",
                time: "5 horas atrás",
                type: "success",
              },
            ].map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      log.type === "success" ? "bg-green-500" : log.type === "warning" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{log.event}</p>
                    <p className="text-xs text-slate-500">
                      {log.user} • {log.ip}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">{log.time}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline">Ver Todos os Logs</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderNotificationsSettings = () => (
    <div className="space-y-6">
      {/* Configurações de E-mail */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Notificações por E-mail</CardTitle>
          <p className="text-slate-500 text-sm">Configure quando e como receber notificações</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Vendas e Clientes</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm">Novos leads</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Vendas concluídas</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Tarefas vencidas</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Relatórios semanais</span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900">Sistema</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm">Atualizações do sistema</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Alertas de segurança</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Backup concluído</span>
                  <input type="checkbox" className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Manutenção programada</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configurações Push */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Notificações Push</CardTitle>
          <p className="text-slate-500 text-sm">Notificações em tempo real no navegador</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg mb-4">
            <div>
              <h4 className="font-medium text-blue-900">Notificações Push</h4>
              <p className="text-sm text-blue-700">Receba alertas instantâneos no navegador</p>
            </div>
            <Button>Ativar Push</Button>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Mensagens urgentes</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Novas tarefas atribuídas</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Lembretes de reunião</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Horários de Notificação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Horários de Notificação</CardTitle>
          <p className="text-slate-500 text-sm">Defina quando receber notificações</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Horário de Início</label>
              <input type="time" defaultValue="08:00" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Horário de Fim</label>
              <input type="time" defaultValue="18:00" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Dias da Semana</label>
            <div className="flex flex-wrap gap-2">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, index) => (
                <label key={day} className="flex items-center">
                  <input type="checkbox" defaultChecked={index < 5} className="mr-2" />
                  <span className="text-sm">{day}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button>Salvar Horários</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderIntegrationsSettings = () => (
    <div className="space-y-6">
      {/* Integrações Ativas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Integrações Ativas</CardTitle>
          <p className="text-slate-500 text-sm">Serviços conectados ao seu sistema</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "WhatsApp Business",
                status: "Conectado",
                icon: "💬",
                description: "Envio de mensagens automáticas",
              },
              { name: "Google Calendar", status: "Conectado", icon: "📅", description: "Sincronização de eventos" },
              { name: "Mailchimp", status: "Desconectado", icon: "📧", description: "Marketing por e-mail" },
              { name: "Zapier", status: "Conectado", icon: "⚡", description: "Automação de processos" },
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <div>
                    <h4 className="font-medium text-slate-900">{integration.name}</h4>
                    <p className="text-sm text-slate-500">{integration.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={integration.status === "Conectado" ? "default" : "secondary"}
                    className={integration.status === "Conectado" ? "bg-green-100 text-green-800" : ""}
                  >
                    {integration.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    {integration.status === "Conectado" ? "Configurar" : "Conectar"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* APIs e Webhooks */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">APIs e Webhooks</CardTitle>
          <p className="text-slate-500 text-sm">Configure integrações personalizadas</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-slate-900">Chave da API</h4>
              <Button variant="outline" size="sm">
                Regenerar
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <code className="flex-1 p-2 bg-white border rounded text-sm font-mono">pk_live_51234567890abcdef...</code>
              <Button variant="outline" size="sm">
                Copiar
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Webhooks Configurados</h4>
            {[
              { url: "https://app.exemplo.com/webhook/vendas", event: "Nova Venda", status: "Ativo" },
              { url: "https://app.exemplo.com/webhook/clientes", event: "Novo Cliente", status: "Ativo" },
            ].map((webhook, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900">{webhook.event}</p>
                  <p className="text-xs text-slate-500">{webhook.url}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">{webhook.status}</Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Webhook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderBillingSettings = () => (
    <div className="space-y-6">
      {/* Plano Atual */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Plano Atual: Professional</CardTitle>
          <p className="text-blue-700">Renovação automática em 15 dias</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">R$ 299</div>
              <div className="text-sm text-blue-700">por mês</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">50</div>
              <div className="text-sm text-blue-700">usuários inclusos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">∞</div>
              <div className="text-sm text-blue-700">clientes ilimitados</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Faturas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Histórico de Faturas</CardTitle>
          <p className="text-slate-500 text-sm">Suas últimas cobranças e pagamentos</p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-medium text-slate-600">Data</th>
                  <th className="text-left p-4 font-medium text-slate-600">Descrição</th>
                  <th className="text-left p-4 font-medium text-slate-600">Valor</th>
                  <th className="text-left p-4 font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 font-medium text-slate-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    date: "01/12/2024",
                    description: "Plano Professional - Dezembro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                  {
                    date: "01/11/2024",
                    description: "Plano Professional - Novembro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                  {
                    date: "01/10/2024",
                    description: "Plano Professional - Outubro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                  {
                    date: "01/09/2024",
                    description: "Plano Professional - Setembro",
                    amount: "R$ 299,00",
                    status: "Pago",
                  },
                ].map((invoice, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-900">{invoice.date}</td>
                    <td className="p-4 text-slate-600">{invoice.description}</td>
                    <td className="p-4 font-medium text-slate-900">{invoice.amount}</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">{invoice.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Método de Pagamento */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Método de Pagamento</CardTitle>
          <p className="text-slate-500 text-sm">Cartão usado para cobranças automáticas</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
                <p className="text-sm text-slate-500">Expira em 12/2025</p>
              </div>
            </div>
            <Button variant="outline">Alterar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderBackupSettings = () => (
    <div className="space-y-6">
      {/* Status do Backup */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Último Backup: Hoje às 03:00
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">2.4 GB</div>
              <div className="text-sm text-green-700">Tamanho do backup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">30</div>
              <div className="text-sm text-green-700">Backups armazenados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">99.9%</div>
              <div className="text-sm text-green-700">Taxa de sucesso</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Backup */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Configurações de Backup</CardTitle>
          <p className="text-slate-500 text-sm">Configure frequência e retenção dos backups</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Frequência</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md">
                <option value="daily">Diário</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Horário</label>
              <input type="time" defaultValue="03:00" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Retenção</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md">
                <option value="30">30 dias</option>
                <option value="60">60 dias</option>
                <option value="90">90 dias</option>
                <option value="365">1 ano</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Local de Armazenamento</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md">
                <option value="aws">Amazon S3</option>
                <option value="google">Google Cloud</option>
                <option value="local">Servidor Local</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Dados para Backup</h4>
            <div className="space-y-2">
              {[
                "Dados de clientes",
                "Histórico de vendas",
                "Configurações do sistema",
                "Logs de atividade",
                "Arquivos enviados",
              ].map((item, index) => (
                <label key={index} className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salvar Configurações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Backups */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-slate-900">Histórico de Backups</CardTitle>
              <p className="text-slate-500 text-sm">Últimos backups realizados</p>
            </div>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Backup Manual
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Hoje 03:00", size: "2.4 GB", status: "Sucesso", type: "Automático" },
              { date: "Ontem 03:00", size: "2.3 GB", status: "Sucesso", type: "Automático" },
              { date: "02/12 03:00", size: "2.3 GB", status: "Sucesso", type: "Automático" },
              { date: "01/12 15:30", size: "2.2 GB", status: "Sucesso", type: "Manual" },
              { date: "01/12 03:00", size: "2.2 GB", status: "Falha", type: "Automático" },
            ].map((backup, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${backup.status === "Sucesso" ? "bg-green-500" : "bg-red-500"}`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{backup.date}</p>
                    <p className="text-xs text-slate-500">
                      {backup.size} • {backup.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={backup.status === "Sucesso" ? "default" : "destructive"}
                    className={backup.status === "Sucesso" ? "bg-green-100 text-green-800" : ""}
                  >
                    {backup.status}
                  </Badge>
                  {backup.status === "Sucesso" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSystemSettings = () => (
    <div className="space-y-6">
      {/* Informações do Sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Informações do Sistema</CardTitle>
          <p className="text-slate-500 text-sm">Detalhes técnicos e status do sistema</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Versão do Sistema:</span>
                <span className="text-sm font-medium text-slate-900">v2.4.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Última Atualização:</span>
                <span className="text-sm font-medium text-slate-900">15/12/2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Uptime:</span>
                <span className="text-sm font-medium text-green-600">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Servidor:</span>
                <span className="text-sm font-medium text-slate-900">AWS us-east-1</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Banco de Dados:</span>
                <span className="text-sm font-medium text-slate-900">PostgreSQL 14.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Cache:</span>
                <span className="text-sm font-medium text-slate-900">Redis 6.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Storage:</span>
                <span className="text-sm font-medium text-slate-900">45.2 GB / 100 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">SSL:</span>
                <span className="text-sm font-medium text-green-600">Ativo</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance do Sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Performance do Sistema</CardTitle>
          <p className="text-slate-500 text-sm">Métricas de desempenho em tempo real</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-slate-600">CPU</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">76%</div>
              <div className="text-sm text-slate-600">Memória</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "76%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">45%</div>
              <div className="text-sm text-slate-600">Disco</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">120ms</div>
              <div className="text-sm text-slate-600">Latência</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manutenção */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Manutenção do Sistema</CardTitle>
          <p className="text-slate-500 text-sm">Ferramentas de limpeza e otimização</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Limpeza de Cache</h4>
              <p className="text-sm text-slate-600 mb-3">Remove arquivos temporários e otimiza performance</p>
              <Button variant="outline" className="w-full">
                Limpar Cache
              </Button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Otimização de BD</h4>
              <p className="text-sm text-slate-600 mb-3">Reorganiza e otimiza o banco de dados</p>
              <Button variant="outline" className="w-full">
                Otimizar BD
              </Button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Verificação de Integridade</h4>
              <p className="text-sm text-slate-600 mb-3">Verifica consistência dos dados</p>
              <Button variant="outline" className="w-full">
                Verificar
              </Button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-900 mb-2">Logs de Sistema</h4>
              <p className="text-sm text-slate-600 mb-3">Visualiza logs detalhados do sistema</p>
              <Button variant="outline" className="w-full">
                Ver Logs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Atualizações */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Atualizações Disponíveis</CardTitle>
          <p className="text-slate-500 text-sm">Mantenha seu sistema sempre atualizado</p>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-blue-900">Atualização v2.5.0 Disponível</h4>
                <p className="text-sm text-blue-700">Novas funcionalidades e correções de segurança</p>
                <ul className="text-sm text-blue-600 mt-2 space-y-1">
                  <li>• Novo dashboard de analytics</li>
                  <li>• Melhorias de performance</li>
                  <li>• Correções de segurança</li>
                </ul>
              </div>
              <Button>Atualizar Agora</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Navegação por abas */}
      <div className="border-b border-slate-200">
        <nav className="flex space-x-8 overflow-x-auto">
          {[
            { id: "general", label: "Geral", icon: Settings },
            { id: "users", label: "Usuários", icon: Users },
            { id: "security", label: "Segurança", icon: Shield },
            { id: "notifications", label: "Notificações", icon: Bell },
            { id: "integrations", label: "Integrações", icon: Zap },
            { id: "billing", label: "Faturamento", icon: DollarSign },
            { id: "backup", label: "Backup", icon: Upload },
            { id: "system", label: "Sistema", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSettingsTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeSettingsTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Conteúdo das abas */}
      {renderSettingsContent()}
    </div>
  )