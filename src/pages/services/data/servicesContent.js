/**
 * Services page content — edit this file to update service details.
 * Each service needs a unique `id` (used for anchor links on this page).
 */

export const servicesHero = {
  label: "Services",
  title: "End-to-end AI automation and software engineering.",
  description:
    "We design, build, and scale intelligent systems that eliminate manual work, modernize your stack, and help your team move faster—with technology built to last.",
};

export const services = [
  {
    id: "ai-automation",
    tag: "01",
    title: "AI Automation",
    summary:
      "Intelligent workflows that connect your tools, eliminate repetitive tasks, and scale operations without adding headcount.",
    description:
      "We build automation systems that sit at the center of how your business runs—not bolted on as an afterthought. From document processing and data sync to customer onboarding and internal approvals, we map your workflows, identify bottlenecks, and deploy AI-powered pipelines that run reliably in production.",
    features: [
      "Workflow design & process mapping",
      "Multi-tool integrations (CRM, ERP, email, Slack, etc.)",
      "AI agents for classification, extraction & routing",
      "Scheduled jobs, webhooks & event-driven triggers",
      "Human-in-the-loop review where needed",
      "Monitoring, logging & error recovery",
    ],
    deliverables: [
      "Documented automation architecture",
      "Production-ready workflows & integrations",
      "Admin dashboards or status views (when required)",
      "Runbooks and team training",
    ],
    idealFor: [
      "Operations & ops-heavy teams",
      "Companies drowning in manual data entry",
      "Teams scaling without proportional hiring",
    ],
  },
  {
    id: "software-development",
    tag: "02",
    title: "Software Development",
    summary:
      "Custom platforms and web experiences built with modern architecture, performance, and long-term maintainability in mind.",
    description:
      "Whether you need a customer-facing product, an internal tool, or a full platform rebuild, we ship software with clean architecture and a focus on user experience. We work in modern stacks, write testable code, and hand off systems your team can own—or stay on as a long-term partner.",
    features: [
      "Web applications (React, modern frontends)",
      "APIs, microservices & backend systems",
      "Database design & cloud deployment",
      "Authentication, roles & permissions",
      "Performance optimization & accessibility",
      "CI/CD pipelines & DevOps setup",
    ],
    deliverables: [
      "Production application (web and/or API)",
      "Source code in your repository",
      "Technical documentation",
      "Deployment & environment configuration",
    ],
    idealFor: [
      "Startups launching an MVP or v2",
      "Businesses replacing legacy tools",
      "Teams needing a dedicated product squad",
    ],
  },
  {
    id: "digital-transformation",
    tag: "03",
    title: "Digital Transformation",
    summary:
      "End-to-end strategy and implementation that modernizes legacy processes and aligns technology with business goals.",
    description:
      "Transformation is more than new software—it's changing how work gets done. We audit your current systems, define a pragmatic roadmap, and execute in phases so you see value early. We bridge legacy and modern stacks, reduce technical debt, and align stakeholders around measurable outcomes.",
    features: [
      "Current-state assessment & gap analysis",
      "Technology roadmap & phased rollout plans",
      "Legacy system migration & data moves",
      "Process redesign alongside tooling",
      "Change management support & documentation",
      "KPI tracking & continuous improvement",
    ],
    deliverables: [
      "Transformation roadmap & prioritization",
      "Implemented systems per phase",
      "Migration plans & rollback strategies",
      "Executive summaries & progress reporting",
    ],
    idealFor: [
      "Enterprises modernizing operations",
      "Companies outgrowing spreadsheets & silos",
      "Leadership driving company-wide efficiency",
    ],
  },
];

export const capabilities = {
  label: "Capabilities",
  title: "What we build with.",
  description:
    "We choose tools based on your stack and goals—not trends. Below are technologies we work with regularly.",
  categories: [
    {
      name: "AI & automation",
      items: ["OpenAI / LLM APIs", "Custom agents", "Zapier / Make", "Python pipelines", "RAG & knowledge bases"],
    },
    {
      name: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive & accessible UI"],
    },
    {
      name: "Backend & cloud",
      items: ["Node.js", "REST & GraphQL APIs", "PostgreSQL", "AWS / GCP / Azure", "Docker"],
    },
    {
      name: "Integrations",
      items: ["Salesforce", "HubSpot", "Google Workspace", "Slack", "Stripe", "Custom webhooks"],
    },
  ],
};

export const whyVerkoni = {
  label: "Why Verkoni",
  title: "Built for teams who need results, not reports.",
  points: [
    {
      title: "Production-first",
      description: "Everything we deliver is meant to run in the real world—with error handling, security, and maintainability baked in.",
    },
    {
      title: "Transparent delivery",
      description: "Weekly demos, clear milestones, and no surprise scope. You always know what's shipping and when.",
    },
    {
      title: "Flexible engagement",
      description: "Fixed-scope projects, retainers, or phased transformations—we adapt to how your team works best.",
    },
  ],
};

export const engagementModels = [
  {
    title: "Project-based",
    description: "Defined scope, timeline, and deliverables. Best for MVPs, automations, or standalone builds.",
  },
  {
    title: "Retainer",
    description: "Ongoing capacity for iterations, support, and continuous improvement month over month.",
  },
  {
    title: "Discovery sprint",
    description: "1–2 week audit and roadmap before commitment—ideal for complex or uncertain scope.",
  },
];

export const servicesCta = {
  title: "Not sure which service fits?",
  description:
    "Tell us about your goals on a quick call—we'll recommend the right approach and outline next steps.",
  primaryLabel: "Start a project",
  primaryHref: "/contact",
  secondaryLabel: "How we work",
  secondaryHref: "/about",
};
