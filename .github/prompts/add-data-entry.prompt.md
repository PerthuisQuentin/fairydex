---
mode: agent
---

You are tasked with adding a new data entry to the project (e.g., agent, bangboo, faction, etc.). Follow these steps precisely:

1. **Declare the new entry in the relevant enum**

   - Add the identifier for the new entry to the appropriate enum (e.g., `AgentId`, `BangbooId`, `FactionId`, etc.) in the corresponding `type.ts` file.

2. **Create the data file for the new entry**

   - Create a file in the relevant `raw-data/` directory (e.g., `src/agent/data/raw-data/`, `src/bangboo/data/raw-data/`, etc.) named after the new entry (e.g., `my-entry.ts`).
   - This file must export an object of the correct type (e.g., `Agent`, `Bangboo`, `Faction`, etc.) with all required properties.

3. **Import the new entry into the main list**

   - Import the new data file in the corresponding main data file (e.g., `agents.data.ts`, `bangboos.data.ts`, `factions.data.ts`).
   - Add the new entry to the main array (e.g., `agentList`, `bangbooList`, `factionList`).

4. **(Optional) Update documentation**
   - If needed, update or add documentation for the new entry in the `docs/` folder.

**Do not handle the icon or image addition, this will be done manually.**

Success criteria:

- The new entry appears in the enum, the main list, and has its own data file.
- The project compiles without errors after the addition.
