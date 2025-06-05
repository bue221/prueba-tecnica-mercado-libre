# Instrucciones de Ejecución

## Requisitos Previos

- Node.js >= 18
- pnpm >= 8.15.4

## Instalación

1. Instalar dependencias:
```bash
pnpm install
```

2. Configurar variables de entorno:
- Copiar los archivos `.env.example` a `.env` en cada aplicación
- Ajustar las variables según sea necesario

## Desarrollo

Para ejecutar todas las aplicaciones en modo desarrollo:
```bash
pnpm dev
```

Para ejecutar una aplicación específica:
```bash
pnpm dev --filter=frontend
pnpm dev --filter=backend
pnpm dev --filter=mcp-server
```

## Construcción

Para construir todas las aplicaciones:
```bash
pnpm build
```

Para construir una aplicación específica:
```bash
pnpm build --filter=frontend
pnpm build --filter=backend
pnpm build --filter=mcp-server
```

## Linting

Para ejecutar el linter en todas las aplicaciones:
```bash
pnpm lint
```

## Formateo de Código

Para formatear todo el código:
```bash
pnpm format
```

## Estructura del Proyecto

```
/monorepo-root
├── apps
│   ├── frontend     → Next.js
│   ├── backend      → Nest.js
│   └── mcp-server   → MCP Server
├── packages
│   └── shared       → Tipos y utilidades compartidas
├── .gitignore
├── turbo.json
└── run.md
``` 