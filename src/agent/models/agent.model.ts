import { AgentData, AgentId } from '@/agent/data/agent.type';
import { AttributeId } from '@/attribute/data/attribute.type';
import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineId } from '@/w-engine/data/w-engine.type';

export class Agent {
    public readonly id: AgentId;
    public readonly name: string;
    public readonly rank: Rank;
    public readonly isPermanent: boolean;
    public readonly attributeId: AttributeId;
    public readonly specialityId: SpecialityId;
    public readonly factionId: FactionId;
    public readonly firstVersionId: VersionId;
    public readonly signatureWEngineId: WEngineId;

    constructor(agentData: AgentData) {
        this.id = agentData.id;
        this.name = agentData.name;
        this.rank = agentData.rank;
        this.isPermanent = agentData.isPermanent;
        this.attributeId = agentData.attributeId;
        this.specialityId = agentData.specialityId;
        this.factionId = agentData.factionId;
        this.firstVersionId = agentData.firstVersionId;
        this.signatureWEngineId = agentData.signatureWEngineId;
    }
}