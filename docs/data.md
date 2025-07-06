# Data Files and Usage

This document explains how data is structured, stored, and used in this project.

## Philosophy

Instead of using plain JSON files, all project data is stored as TypeScript modules. This approach leverages TypeScript's strong typing, autocompletion, and compile-time checks, making the data safer and easier to use within the codebase.

## Structure

- **Location:** Data related to agents is located in `src/agent/data/`.
- **Types:** The file `agent.type.ts` defines the `AgentId` enum, listing all valid agent identifiers. This ensures consistency and prevents typos.
- **Data Files:** Each agent's data is stored in its own TypeScript file under `src/agent/data/raw-data/`. These files export the agent's data as a typed object.
- **Centralization:** The file `agents.data.ts` imports all individual agent data files and aggregates them for use throughout the application.

## Example

```ts
// src/agent/data/agent.type.ts
export enum AgentId {
  AlexandrinaSebastiane = 'alexandrina-sebastiane',
  // ...other agents
}

// src/agent/data/raw-data/alexandrina-sebastiane.ts
import { Agent } from '@/agent/models/agent.model';
const AlexandrinaSebastiane: Agent = {
  // ...agent data
};
export default AlexandrinaSebastiane;

// src/agent/data/agents.data.ts
import AlexandrinaSebastiane from './raw-data/alexandrina-sebastiane';
// ...other imports

export const agents = {
  [AgentId.AlexandrinaSebastiane]: AlexandrinaSebastiane,
  // ...other agents
};
```

## Advantages

- **Type Safety:** All data is validated at compile time, reducing runtime errors.
- **Autocompletion:** Developers benefit from IDE features like autocompletion and inline documentation.
- **Consistency:** Centralized enums and types ensure data integrity across the codebase.

## Limitations

- **Portability:** Data is not directly reusable outside the TypeScript/JavaScript ecosystem without conversion.
- **Tight Coupling:** Data is closely tied to the project's type definitions and structure.
