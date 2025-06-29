# Navigation Documentation

This document explains the navigation structure and conventions used in this project, especially as it relates to Next.js routing and the organization of page files.

## Navigation Structure

- The main navigation files are located in the `src/app/` folder, following Next.js conventions.
- Each route (e.g., `/agents`, `/bangboos`, `/drive-discs`, `/w-engines`) has its own folder and a `page.tsx` file for the entry point.
- Dynamic routes (e.g., `[agentId]`, `[bangbooId]`, `[driveDiscId]`, `[wEngineId]`) are handled with bracket notation in folder names.

## List of Pages

Below is a list of all navigation pages, including nested and dynamic routes:

- `/`
- `/agents`
  - `/agents/[agentId]`
- `/bangboos`
  - `/bangboos/[bangbooId]`
- `/drive-discs`
  - `/drive-discs/[driveDiscId]`
- `/w-engines`
  - `/w-engines/[wEngineId]`

This structure shows how nested and dynamic routes are organized in the project.

## Separation of Concerns

To avoid code duplication and keep navigation files clean:

- The actual page content is implemented in dedicated files in `src/components/pages/`.
- Navigation files in `src/app/` (such as `page.tsx`) only handle Next.js-specific logic: metadata, path parameters, and route configuration.
- These navigation files import the corresponding page component from `src/components/pages/` and render it.

This approach avoids having many files with the same name (`page.tsx`) containing large amounts of code, and keeps navigation logic and page content clearly separated.

## Example: Minimal Navigation File

For pages without particularities, the navigation file simply re-exports the page component:

```tsx
import Agents from '@/components/pages/agents.page';

export default Agents;
```

## Example: Navigation File with Metadata

A navigation file in `src/app/agents/page.tsx` might look like:

```tsx
import AgentsPage from '@/components/pages/agents-page.component';

export const metadata = { title: 'Agents' };

export default function Page() {
  return <AgentsPage />;
}
```

- All business and UI logic is in the page component.
- The navigation file only manages route-level concerns.

## Benefits

- Keeps navigation files minimal and focused on routing.
- Makes it easier to search for and maintain page content.
- Reduces the risk of having many large, duplicate `page.tsx` files.

For more details, see the actual navigation files in `src/app/` and the corresponding page components in `src/components/pages/`.
