# Components Documentation

This document provides guidelines and examples for components in this project.

## Organization

Components are located in the `src/components/` folder, organized by business domain (e.g., `agent`, `attribute`, `rank`, `speciality`, `ui`, etc.).

## File Naming

Component files use snake-case and include the `.component.tsx` suffix for React components (e.g., `agent-card.component.tsx`).

## Example: Agent Card Component

A typical component file:

```tsx
import Link from 'next/link';
import { Agent } from '@/models/agent/agent.model';
import SelectableCard from '../ui/selectable-card.component';

type AgentCardProps = {
    readonly agent: Agent
};

export default function AgentCard({ agent }: AgentCardProps) {
    return (
        <Link key={agent.id} href={`/agents/${agent.id}`}>
            <SelectableCard className='w-42'>
                {/* ...component content... */}
            </SelectableCard>
        </Link>
    );
}
```

- Use TypeScript for type safety.
- Use clear and descriptive prop types.
- Use relative or alias imports for dependencies.

For more examples, see the component files in `src/components/`.
