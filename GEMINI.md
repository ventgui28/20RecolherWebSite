# Contexto de Desenvolvimento: 20 Recolher Website

## 🎯 Visão do Projeto
Website institucional de elite para a empresa **20 Recolher** (Cantanhede), focado na gestão de resíduos e REEE. O design segue o conceito **"Minimalismo de Luxo" (Clean Luxury)**, inspirado na Apple e Tesla.

### 💎 Identidade Visual
- **Paleta:** Branco Puro (`#FFFFFF`), Texto em Preto Profundo (`#111111`), Acentos em Verde Vibrante (`#34bf49`).
- **Filosofia:** Espaço negativo generoso, tipografia imponente, transparências cristalinas (Glassmorphism).
- **Animações:** Fluidez orgânica via Framer Motion com curvas `cubic-bezier` personalizadas (Apple-style).

---

## 🛠️ Stack Tecnológica & Arquitetura
- **Framework:** Next.js 15 (App Router).
- **Estilo:** Tailwind CSS v4 + Shadcn/UI (Radix).
- **SEO & Performance:** Arquitetura de elite que separa **Server Components** (Metadados e SSR) de **Client Components** (Interatividade).
  - Exemplo: `page.tsx` (Server) importa `content.tsx` (Client).
- **Ficheiros Técnicos:** `robots.ts` e `sitemap.ts` dinâmicos já implementados.

---

## 🏛️ Estrutura de Páginas (Checklist)
- [x] **Home:** Hero Section imponente + Resumo de Serviços + Manifesto de Compromisso.
- [x] **O Nosso Legado (Sobre):** Narrativa real (2013 CIM-BM, fundação 2014, transição Tentúgal -> Cantanhede 2022).
- [x] **Serviços:** Categorias detalhadas (REEE, Consumíveis, Indústria, Conformidade).
- [x] **Clientes & Setores:** Foco em Administração Pública (Tribunais, Escolas) e Indústria.
- [x] **Sustentabilidade:** Manifesto ambiental e economia circular.
- [x] **Contactos:** Portal de concierge com mapa e dados oficiais.
- [x] **Pedido de Recolha:** Formulário multi-passo funcional.

---

## 📞 Informações Institucionais Reais
- **Email:** `info@20recolher.pt`
- **Telefones:** `+351 912 858 819` | `+351 910 121 412`
- **Morada:** Zona Industrial de Cantanhede, Núcleo 1, Lote 2 Fração E, 3060-197 Cantanhede.
- **Licenciamento:** CCDRC (Comissão de Coordenação e Desenvolvimento Regional do Centro).

---

## 📜 Mandatos de Engenharia (Senior Only)

### 1. Padrão de Commits
Obrigatório o uso de **Conventional Commits** em **Português de Portugal (pt-pt)**:
- `feat(ui):`, `feat(page):`, `fix(nav):`, `perf(seo):`, `chore(docs):`.
- Mensagens detalhadas no imperativo, descrevendo o impacto técnico.

### 2. Qualidade de Código
- Manter o sistema de animações centralizado no componente `ScrollReveal`.
- Manter as transições de página globais no `app/template.tsx`.
- Garantir que o botão de WhatsApp (Concierge) se mantém subtil e elegante.

### 3. Próximas Tarefas Pendentes
1. Página de **"Como Funciona"** (Infográfico detalhado do processo de 4 passos).
2. Refinamento de **Hover Effects** globais (estilo Apple/Galerias de Arte).
3. Melhoria do **Menu Mobile** (animações de entrada laterais mais luxuosas).
4. Implementação de **Favicons de Elite** e Apple Touch Icons.

---
*Ficheiro gerado para transição de sessão em 30 de Março de 2026.*


