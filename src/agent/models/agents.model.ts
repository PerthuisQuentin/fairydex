import { AgentId } from '@/agent/data/agent.type';
import { AttributeFamilyId } from '@/attribute/data/attribute.type';
import { attributes } from '@/attribute/data/attributes.data';
import { SpecialityId } from '@/speciality/data/speciality.type';

import { Agent } from './agent.model';

export type FilterCriteria = {
    attributeFamilyIds?: AttributeFamilyId[];
    specialityIds?: SpecialityId[];
}

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

    getAll(filterCriteria?: FilterCriteria): Agent[] {
        return this.agents.filter((agent) => {
            if (filterCriteria?.attributeFamilyIds) {
                const attribute = attributes.getById(agent.attributeId);
                if (!attribute || !filterCriteria.attributeFamilyIds.includes(attribute.familyId)) {
                    return false;
                }
            }
            if (filterCriteria?.specialityIds && !filterCriteria.specialityIds.includes(agent.specialityId)) {
                return false;
            }
            return true;
        });
    }
}