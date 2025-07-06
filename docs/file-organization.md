# Project File Organization

This document provides an overview of the file and folder structure of this project. It also serves as an entry point to more detailed documentation about specific parts of the codebase.

## Organization Principles

The project is organized primarily by **domain** at the top level of the `src` folder. Each main domain (such as `agent`, `bangboo`, etc.) has its own folder under `src/`. Inside each domain folder, files and subfolders are organized by technical role (such as `components`, `models`, `data`, etc.). This domain-first approach makes it easier to find all logic, components, and resources related to a specific business concept in one place, while still maintaining technical separation within each domain.

## File Naming Conventions

File names use snake-case (e.g., `agent-card.component.tsx`, `agent.model.ts`, `bangboo.data.ts`) and generally include an extension or suffix that indicates their technical role. This convention helps when searching for files by name and avoids confusion when multiple files could otherwise have the same name in different folders. The naming convention is consistent across all domains.

## Root Structure

- `src/` — Main source code for the application, organized by domain
- `public/` — Static assets (images, icons, etc.)
- `docs/` — Project documentation (this folder)

## `src/` Folder Example

Each domain folder contains its own technical subfolders. For example:

- `src/agent/`
  - `components/` — React components related to agents
  - `models/` — TypeScript models and types for agents
  - `data/` — Data files and static resources for agents
- `src/bangboo/`
  - `components/` — React components related to bangboos
  - `models/` — TypeScript models and types for bangboos
  - `data/` — Data files and static resources for bangboos

This pattern is repeated for each main domain. Shared or truly global logic can still be placed in a dedicated `common/` folder under `src/` if needed.
