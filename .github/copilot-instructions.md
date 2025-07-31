# Copilot Instructions for the fairydex Project

## Overview

- This is a Next.js (App Router) project, organized by business domain under `src/` (e.g., `agent`, `bangboo`, `attribute`, etc.).
- Each domain contains its own `components/`, `models/`, and `data/` subfolders, following a domain-first, technical-role-second structure.
- All data is stored as TypeScript modules (not JSON), leveraging strong typing and autocompletion.

## Key Conventions

- **File Naming:** Use snake-case. React components end with `.component.tsx` (e.g., `agent-card.component.tsx`). Models/types use `.model.ts` or `.type.ts`.
- **Tailwind CSS:** Organize utility classes across multiple lines using the `classNames` function for readability.
- **Navigation:**
  - Route files live in `src/app/` (Next.js convention).
  - Page content is implemented in `src/[domain]/pages/` and imported into the route file.
  - Dynamic routes use bracket notation (e.g., `[agentId]`).
- **Data Aggregation:**
  - Each entity (e.g., agent) has its own data file in `src/[domain]/data/raw-data/`.
  - Central data files (e.g., `agents.data.ts`) aggregate all entities for use in the app.

## Project Structure Example

```
src/
  agent/
    components/
    pages/
    models/
    data/
  bangboo/
    components/
    pages/
    models/
    data/
  ...
  common/
    components/
    pages/
```

## Developer Workflows

- **Start Dev Server:** `npm run dev` (Next.js default)
- **Build:** `npm run build`
- **Static Assets:** Place images/icons in `public/` (mirrors domain structure for agent/faction icons, etc.)

## Patterns & Best Practices

- Prefer colocating logic, data, and components by domain.
- Use enums for IDs (e.g., `AgentId`) to ensure type safety and avoid typos.
- Avoid duplicating navigation/page logic; keep route files minimal and delegate to page components.
- For shared logic, use `src/common/`.

## Documentation

- Always consult `docs/README.md` for the documentation index and guidance on where to find more details.
- See `docs/file-organization.md`, `docs/components.md`, `docs/navigation.md`, and `docs/data.md` for in-depth conventions and examples.

---

For any new pattern or uncertainty, check the `docs/` folder first to ensure consistency with project standards.
