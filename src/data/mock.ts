export const kpis = [
  { icon: "📣", value: "847", label: "Leads este mes", change: "↑ 23% · CPL $1.42", up: true, color: "accent" },
  { icon: "✅", value: "156", label: "Suscriptores activos", change: "↑ 12 esta semana · MRR $4,680", up: true, color: "success" },
  { icon: "🔄", value: "18.4%", label: "Conversión", change: "↑ 2.1pp vs anterior", up: true, color: "primary" },
  { icon: "🤖", value: "1,284", label: "Mensajes IA", change: "↑ 34% · 94% sin humano", up: true, color: "purple" },
  { icon: "🤝", value: "203", label: "Referidos influencers", change: "↑ 45 este mes", up: true, color: "cyan" },
  { icon: "⚠️", value: "3.2%", label: "Churn rate", change: "↑ 0.4pp · 5 bajas", up: false, color: "danger" },
];

export const leadsPerWeek = [
  { week: "S1", value: 85 },
  { week: "S2", value: 120 },
  { week: "S3", value: 168 },
  { week: "S4", value: 210 },
  { week: "S5", value: 185 },
  { week: "S6", value: 235 },
  { week: "S7", value: 205 },
  { week: "S8", value: 125 },
];

export const funnel = [
  { label: "Impresiones", value: "52,400", pct: 100, color: "#4f46e5" },
  { label: "Clicks", value: "4,180", pct: 48, color: "#6366f1" },
  { label: "Leads", value: "847", pct: 26, color: "#818cf8" },
  { label: "Trial", value: "312", pct: 14, color: "#a5b4fc" },
  { label: "Suscriptores", value: "156", pct: 8, color: "#059669" },
];

export const inboxItems = [
  { initials: "MR", name: "Marcos Rodriguez", msg: "Hola, tengo 200 equipos y necesito organizar todo. ¿Cómo funciona?", time: "4 min", tag: "hot", tagLabel: "🔥 Hot", unread: true, color: "danger" },
  { initials: "LC", name: "Laura Campos", msg: "Vi el anuncio en Instagram. ¿Tienen plan para locales chicos?", time: "12 min", tag: "warm", tagLabel: "Warm", unread: true, color: "accent" },
  { initials: "JP", name: "Juan Pablo Méndez", msg: "Quiero info sobre el sistema de gestión de stock", time: "28 min", tag: "new", tagLabel: "Nuevo", unread: false, color: "primary" },
  { initials: "CF", name: "Carolina Flores", msg: "Ya estoy usando el módulo de IMEI. Consulta sobre reportes...", time: "1 hr", tag: "active", tagLabel: "Activa", unread: false, color: "success" },
  { initials: "DT", name: "Daniel Torres", msg: "¿Se puede integrar con MercadoLibre?", time: "2 hr", tag: "warm", tagLabel: "Warm", unread: false, color: "purple" },
];

export const activities = [
  { icon: "🤖", text: "Agente IA resolvió consulta de Marcos R.", time: "hace 4 min" },
  { icon: "✅", text: "Nueva suscripción: TechCell BA — Pro", time: "hace 23 min" },
  { icon: "📣", text: "Campaña \"Arancel 0\" generó 34 leads", time: "hace 1 hr" },
  { icon: "🔔", text: "Escalamiento: Lead caliente pidió demo", time: "hace 2 hr" },
  { icon: "📝", text: "Contenido aprobado: \"5 errores del revendedor\"", time: "hace 3 hr" },
  { icon: "🤝", text: "@tecnocelular_ok generó 3 referidos", time: "hace 4 hr" },
];

export const subscribers = [
  { name: "TechCell BA", plan: "Pro", planColor: "accent", status: "Activo", statusColor: "green", since: "Hoy" },
  { name: "CelFix Córdoba", plan: "Basic", planColor: "muted", status: "Activo", statusColor: "green", since: "Ayer" },
  { name: "iStore Rosario", plan: "Enterprise", planColor: "purple", status: "Activo", statusColor: "green", since: "Hace 3 días" },
  { name: "MobileZone MDQ", plan: "Pro", planColor: "accent", status: "Trial", statusColor: "yellow", since: "Hace 5 días" },
  { name: "FixPhone Mendoza", plan: "Basic", planColor: "muted", status: "Canceló", statusColor: "red", since: "Hace 7 días" },
];

export const contentItems = [
  { icon: "📸", type: "ig", title: "5 errores del revendedor", meta: "Instagram · Carrusel · Hoy 18:00", status: "Aprobado", statusType: "approved" },
  { icon: "📘", type: "fb", title: "Caso de éxito: TechCell BA", meta: "Facebook · Post · Mañana 10:00", status: "Programado", statusType: "scheduled" },
  { icon: "💬", type: "wa", title: "Nurturing — Semana 2", meta: "WhatsApp · 312 destinatarios", status: "Pendiente", statusType: "pending" },
  { icon: "📧", type: "em", title: "Newsletter: Arancel 0", meta: "Email · 847 suscriptores · Lunes", status: "Pendiente", statusType: "pending" },
  { icon: "🎬", type: "ig", title: "Reel: IMEI en 30 seg", meta: "Instagram · Reel · Martes", status: "Pendiente", statusType: "pending" },
];

export const influencers = [
  { rank: 1, name: "@tecnocelular_ok", handle: "45.2K seguidores · Instagram", conversions: 23, earnings: 345 },
  { rank: 2, name: "@celulares.arg", handle: "32.8K seguidores · Instagram", conversions: 18, earnings: 270 },
  { rank: 3, name: "@revendecel", handle: "28.1K seguidores · TikTok", conversions: 15, earnings: 225 },
  { rank: 4, name: "@stockear.ba", handle: "19.5K seguidores · YouTube", conversions: 11, earnings: 165 },
];

export const campaigns = [
  { name: "Arancel 0 — Oportunidad", detail: "Meta Ads · Instagram + Facebook", stat: "● Activa · 34 leads hoy · CPL $1.18", active: true },
  { name: "Cel Stock — Gestión Pro", detail: "Meta Ads · Revendedores medianos", stat: "● Activa · 18 leads hoy · CPL $1.67", active: true },
  { name: "Retargeting — Trial vencido", detail: "Meta Ads · Audiencia custom", stat: "● Pausada · Esperando creativos", active: false },
];

export const navItems = [
  { section: "Principal", items: [
    { icon: "📊", label: "Dashboard", active: true },
    { icon: "📬", label: "Inbox", badge: "12", badgeColor: "accent" },
    { icon: "👥", label: "Leads", badge: "847", badgeColor: "success" },
    { icon: "✅", label: "Suscriptores" },
  ]},
  { section: "Marketing", items: [
    { icon: "📣", label: "Campañas" },
    { icon: "📝", label: "Contenido", badge: "3", badgeColor: "primary" },
    { icon: "🤝", label: "Influencers" },
  ]},
  { section: "Automatización", items: [
    { icon: "🤖", label: "Agente IA" },
    { icon: "⚡", label: "Flujos" },
    { icon: "📧", label: "Secuencias" },
  ]},
  { section: "Análisis", items: [
    { icon: "📈", label: "Métricas" },
    { icon: "💰", label: "ROI" },
  ]},
];
