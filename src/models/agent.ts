import { AgentData, AgentId } from '@/data/agent.type';
import { AttributeId } from '@/data/attribute.type';
import { Rank } from '@/data/rank.type';
import { SpecialityId } from '@/data/speciality.type';

export class Agent {
    public readonly id: AgentId;
    public readonly name: string;
    public readonly rank: Rank;
    public readonly isPermanent: boolean;
    public readonly attributeId: AttributeId;
    public readonly specialityId: SpecialityId;

    constructor(agentData: AgentData) {
        this.id = agentData.id;
        this.name = agentData.name;
        this.rank = agentData.rank;
        this.isPermanent = agentData.isPermanent;
        this.attributeId = agentData.attributeId;
        this.specialityId = agentData.specialityId;
    }
}