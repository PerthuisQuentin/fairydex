import { AgentId } from '@/data/agent.type';

import { Agent } from './agent.model';

export class Agents {
    private readonly agents: Agent[];
    private readonly agentsById: Map<AgentId, Agent>;

    constructor(agents: Agent[]) {
        this.agents = agents;

        this.agentsById = new Map<AgentId, Agent>();
        agents.forEach((agent) => {
            this.agentsById.set(agent.id, agent);
        });
    }

    getById(id: AgentId): Agent | undefined {
        return this.agentsById.get(id);
    }

    getAll(): Agent[] {
        return this.agents;
    }
}