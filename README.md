# 20 Recolher | Website Institucional de Elite

## Visão Geral
Este é o repositório oficial do novo website da **20 Recolher**, uma empresa líder na gestão de resíduos e REEE em Cantanhede. O projeto foi desenvolvido com uma filosofia de **Minimalismo de Luxo (Clean Luxury)**, focada na autoridade institucional, clareza visual e performance de excelência.

Inspirado nos padrões de design da **Apple** e **Tesla**, o website utiliza fundos brancos puros, tipografia imponente e animações fluidas para transmitir confiança e profissionalismo a empresas e entidades públicas.

---

## 🛠️ Stack Tecnológica (Senior Level)

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router) - Para SEO de alta fidelidade e performance SSR.
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) - Garantia de tipagem forte e código livre de erros comuns.
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) - Design responsivo e utilitário ultra-rápido.
- **Animações:** [Framer Motion](https://www.framer.com/motion/) - Transições de página e Scroll Reveal com curvas de suavização customizadas.
- **Ícones:** [Lucide React](https://lucide.dev/) - Biblioteca de ícones lineares e minimalistas.
- **Componentes:** [Shadcn/UI](https://ui.shadcn.com/) (Radix Primitives) - Fundação de componentes acessíveis e profissionais.

---

## 🏗️ Arquitetura do Projeto

```text
app/
├── (routes)/
│   ├── sobre/           # O Nosso Legado (História e Visão)
│   ├── servicos/        # Detalhamento da Gestão de REEE e Indústria
│   ├── clientes/        # Setores de Atuação (Público e Privado)
│   ├── sustentabilidade/# Manifesto e Impacto Ambiental
│   ├── contactos/       # Canais de Comunicação Direta
│   └── pedido-recolha/  # Formulário de Concierge Multi-passo
├── layout.tsx           # Estrutura global (Navbar, Footer, WhatsApp)
├── template.tsx         # Transições de página sincronizadas
└── globals.css          # Design System (Pure White & Emerald)

components/
├── ui/                  # Componentes base Shadcn/UI
├── navbar.tsx           # Navegação Glassmorphism Cristalina
├── hero.tsx             # Hero sections de alto impacto
├── scroll-reveal.tsx    # Sistema centralizado de animações de scroll
└── whatsapp-button.tsx  # Widget de contacto premium
```

---

## 💎 Princípios de Design

1. **Espaço Negativo (Whitespace):** Uso generoso de margens para focar a atenção no conteúdo de autoridade.
2. **Tipografia Contrastante:** Títulos em Preto Profundo (`#111111`) com pesos fortes contra corpo de texto leve.
3. **Acento Estratégico:** Uso do Verde Esmeralda (`#10B981`) apenas como símbolo de sustentabilidade e ação.
4. **Fluidez Orgânica:** Animações baseadas em curvas `cubic-bezier` personalizadas para uma sensação de qualidade superior.

---

## 🚀 Como Iniciar o Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O website estará disponível em `http://localhost:3000`.

---

## 📄 Licença
Direitos Reservados © 2026 20 Recolher.
Desenvolvido com rigor e compromisso ambiental em Cantanhede, Portugal.
