# Project File Organization

This document provides an overview of the file and folder structure of this project. It also serves as an entry point to more detailed documentation about specific parts of the codebase.

## Organization Principles

The project is organized primarily by technical role at the top level of the `src` folder (such as components, data, models, etc.). Inside these folders, files and subfolders are further organized by business role or domain, with dedicated folders for concepts like `agents`, `bangboos`, and others. This approach helps keep technical concerns separated while making it easy to locate business-specific logic and resources.

## File Naming Conventions

File names use snake-case (e.g., `agent-card.component.tsx`, `agent.model.ts`, `bangboo.data.ts`) and generally include an extension or suffix that indicates their role. This convention helps when searching for files by name and avoids confusion when multiple files could otherwise have the same name in different folders.

## Root Structure

- `src/` — Main source code for the application
- `public/` — Static assets (images, icons, etc.)
- `docs/` — Project documentation (this folder)

## `src/` Folder

- `app/` — Application entry point and main logic
- `components/` — React components ([see components documentation](./components.md))
- `data/` — Data files and static resources ([see data documentation](./data.md))
- `models/` — TypeScript models and types ([see models documentation](./models.md))
