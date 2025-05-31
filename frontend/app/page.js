"use client"

import { useState } from "react"
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Star,
  Play,
  Globe,
  ShoppingCart,
  Megaphone,
  MousePointer,
  Lightbulb,
} from "lucide-react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: BarChart3,
      title: "CRM & ERP Completo",
      description: "Sistema integrado para gestão de clientes, vendas, estoque e financeiro",
      features: ["Dashboard em tempo real", "Automação de processos", "Relatórios avançados"],
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas de alta conversão otimizadas para seus objetivos de negócio",
      features: ["Design responsivo", "Otimização para conversão", "Integração com analytics"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais completas com gestão integrada de produtos e vendas",
      features: ["Catálogo de produtos", "Pagamentos seguros", "Gestão de pedidos"],
    },
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Estratégias completas para aumentar sua presença digital",
      features: ["Redes sociais", "Content marketing", "Email marketing"],
    },
    {
      icon: MousePointer,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google Ads, Facebook e Instagram",
      features: ["ROI otimizado", "Segmentação precisa", "Relatórios detalhados"],
    },
    {
      icon: Lightbulb,
      title: "Consultoria Digital",
      description: "Orientação estratégica para acelerar o crescimento do seu negócio",
      features: ["Análise de mercado", "Planejamento estratégico", "Acompanhamento contínuo"],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de 300% nas vendas",
      description: "Nossos clientes veem crescimento médio de 300% em 6 meses",
    },
    {
      icon: Clock,
      title: "Economia de 40h/semana",
      description: "Automação de processos que libera tempo para focar no crescimento",
    },
    {
      icon: Shield,
      title: "Dados 100% seguros",
      description: "Infraestrutura robusta com backup automático e segurança avançada",
    },
    {
      icon: Zap,
      title: "Implementação em 48h",
      description: "Sistema funcionando rapidamente sem interrupção dos seus processos",
    },
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      role: "CEO",
      content:
        "A Pumock transformou completamente nossa operação. O CRM integrado aumentou nossa produtividade em 250% e as vendas triplicaram.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ana Costa",
      company: "Digital Store",
      role: "Diretora Comercial",
      content:
        "O e-commerce desenvolvido pela Pumock superou todas as expectativas. Vendas online cresceram 400% no primeiro trimestre.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "João Santos",
      company: "Growth Corp",
      role: "Fundador",
      content:
        "A consultoria digital da Pumock foi fundamental para estruturar nosso crescimento. ROI de 800% em campanhas pagas.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const stats = [
    { number: "500+", label: "Empresas atendidas" },
    { number: "300%", label: "Crescimento médio" },
    { number: "48h", label: "Implementação" },
    { number: "99.9%", label: "Uptime garantido" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold text-slate-900">Pumock</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#beneficios" className="text-slate-600 hover:text-blue-600 transition-colors">
                Benefícios
              </a>
              <a href="#cases" className="text-slate-600 hover:text-blue-600 transition-colors">
                Cases
              </a>
              <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-slate-600 hover:text-blue-600 transition-colors">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Demonstração Gratuita
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Serviços
                </a>
                <a href="#beneficios" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Benefícios
                </a>
                <a href="#cases" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Cases
                </a>
                <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Contato
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <button className="text-slate-600 hover:text-blue-600 transition-colors text-left">Login</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Demonstração Gratuita
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Acelere seu crescimento digital
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Transforme seu negócio com <span className="text-blue-600">tecnologia inteligente</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                CRM/ERP completo + estratégias digitais que já ajudaram mais de 500 empresas a crescer 300% em média.
                Tudo integrado em uma única plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Demonstração Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo (2 min)
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">Vendas Hoje</span>
                    <span className="text-lg font-bold text-blue-600">R$ 45.280</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">Novos Clientes</span>
                    <span className="text-lg font-bold text-green-600">+127</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">Conversão</span>
                    <span className="text-lg font-bold text-purple-600">24.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Soluções completas para seu crescimento
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Da gestão interna às estratégias de marketing, oferecemos tudo que sua empresa precisa para escalar no
              digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Resultados que transformam negócios</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossos clientes experimentam crescimento real e mensurável em todas as áreas do negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CRM/ERP Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">CRM & ERP que revoluciona sua gestão</h2>
              <p className="text-xl text-blue-100 mb-8">
                Sistema completo que integra vendas, estoque, financeiro e relacionamento com clientes em uma única
                plataforma intuitiva.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Dashboard em tempo real com métricas importantes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Automação completa do pipeline de vendas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Controle total de estoque e fornecedores</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Relatórios gerenciais avançados</span>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Testar Gratuitamente
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <Users className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold">1.247</div>
                    <div className="text-sm text-blue-100">Clientes Ativos</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <DollarSign className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold">R$ 2.1M</div>
                    <div className="text-sm text-blue-100">Faturamento</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <TrendingUp className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold">+34%</div>
                    <div className="text-sm text-blue-100">Crescimento</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <BarChart3 className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-sm text-blue-100">Conversão</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="cases" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Histórias reais de empresas que transformaram seus resultados com a Pumock
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role} - {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Pronto para acelerar seu crescimento?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Agende uma demonstração gratuita e veja como a Pumock pode transformar seu negócio em 48 horas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              Demonstração Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors">
              Falar com Especialista
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            ✓ Sem compromisso ✓ Implementação em 48h ✓ Suporte especializado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">Pumock</span>
              </div>
              <p className="text-slate-400 mb-4">
                Transformando negócios através da tecnologia e estratégias digitais inteligentes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soluções</h3>
              <ul className="space-y-2 text-slate-400">
                <li>CRM & ERP</li>
                <li>Landing Pages</li>
                <li>E-commerce</li>
                <li>Marketing Digital</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Sobre nós</li>
                <li>Cases de sucesso</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-slate-400">
                <li>contato@pumock.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Pumock. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
