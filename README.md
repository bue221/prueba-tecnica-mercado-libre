# Mercado Libre Monorepo

Este proyecto es un monorepo que contiene múltiples aplicaciones y paquetes relacionados con Mercado Libre. Está construido utilizando pnpm workspaces y Turborepo para una gestión eficiente de dependencias y construcción.

## 🏗️ Estructura del Proyecto

```
mercado-libre-monorepo/
├── apps/
│   ├── frontend/     # Aplicación frontend
│   ├── backend/      # Servidor backend
│   └── mcp-server/   # Servidor MCP
├── packages/         # Paquetes compartidos
└── package.json      # Configuración principal
```

## 🚀 Tecnologías Principales

- **pnpm**: Gestor de paquetes (versión 10.11.0)
- **Turborepo**: Herramienta de construcción para monorepos
- **TypeScript**: Lenguaje de programación
- **Prettier**: Formateador de código

## 📋 Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- pnpm (versión 10.11.0)

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd mercado-libre-monorepo
```

2. Instala las dependencias:
```bash
pnpm install
```

## 🏃‍♂️ Scripts Disponibles

- `pnpm build`: Construye todas las aplicaciones
- `pnpm dev`: Inicia todas las aplicaciones en modo desarrollo
- `pnpm dev:front`: Inicia solo el frontend
- `pnpm dev:back`: Inicia solo el backend
- `pnpm dev:mcp`: Construye el servidor MCP
- `pnpm lint`: Ejecuta el linter en todos los proyectos
- `pnpm format`: Formatea el código usando Prettier
- `pnpm clean`: Limpia los archivos generados y node_modules

## 🔧 Configuración del Entorno

1. Asegúrate de tener las variables de entorno necesarias configuradas en cada aplicación.
2. Los archivos de configuración específicos se encuentran en cada subdirectorio de `apps/`.

## 📦 Gestión de Dependencias

- Las dependencias compartidas se manejan a través de pnpm workspaces
- Cada aplicación puede tener sus propias dependencias específicas
- Las dependencias de desarrollo se comparten a nivel de monorepo

## 🤝 Contribución

1. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
2. Haz commit de tus cambios (`git commit -m 'feat: add amazing feature'`)
3. Push a la rama (`git push origin feature/AmazingFeature`)
4. Abre un Pull Request

## 📝 Convenciones de Commits

Este proyecto sigue las convenciones de Conventional Commits:
- `feat`: Nueva característica
- `fix`: Corrección de errores
- `chore`: Tareas de mantenimiento
- `refactor`: Refactorización de código

## 🔍 Monitoreo y Logs

- Los logs de cada aplicación se pueden encontrar en sus respectivos directorios
- Se recomienda usar las herramientas de desarrollo del navegador para el frontend
- Los logs del backend se pueden monitorear a través de la consola

## 🚨 Solución de Problemas

Si encuentras algún problema:
1. Verifica que todas las dependencias estén instaladas correctamente
2. Asegúrate de que las variables de entorno estén configuradas
3. Revisa los logs de la aplicación específica
4. Consulta la documentación de cada aplicación en su respectivo directorio

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 