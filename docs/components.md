# Components Documentation

This document provides guidelines and examples for components in this project.

## Organization

Components are located in the `src/components/` folder, organized by business domain (e.g., `agent`, `attribute`, `rank`, `speciality`, `ui`, etc.).

## File Naming

Component files use snake-case and include the `.component.tsx` suffix for React components (e.g., `agent-card.component.tsx`).

## Tailwind CSS Class Organization

When using Tailwind CSS in React components, it is recommended to organize utility classes across multiple lines using the `classNames` function (or an equivalent utility). This practice improves readability, makes modifications easier, and helps avoid overly long lines.

**Example:**

```tsx
const buttonClass = classNames(
  'group rounded-full w-12 h-12 text-z-white',
  'flex items-center justify-center',
  'border-2 border-z-black bg-z-gray-2 bg-gradient-to-br from-white/10 to-z-gray/10',
  'transition-all duration-200 ease-out hover:bg-green-500',
  className
);
```

**Benefits:**

- Greatly improves readability, especially for complex components.
- Makes it easier to add, remove, or modify classes.
- Allows for clear and concise conditional class logic.

**Best practices:**

- Use this organization in all components that use many Tailwind classes.
- Maintain consistency throughout the project.
- Prefer using `classNames` or a similar utility to handle conditional classes.

## Example: Agent Card Component

A typical component file:

```tsx
import Link from 'next/link';
import { Agent } from '@/models/agent/agent.model';
import DottedCard from '../ui/selectable-card.component';

type AgentCardProps = {
  readonly agent: Agent;
};

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link key={agent.id} href={`/agents/${agent.id}`}>
      <DottedCard containerClass="w-42">
        {/* ...component content... */}
      </DottedCard>
    </Link>
  );
}
```

- Use TypeScript for type safety.
- Use clear and descriptive prop types.
- Use relative or alias imports for dependencies.

For more examples, see the component files in `src/components/`.
