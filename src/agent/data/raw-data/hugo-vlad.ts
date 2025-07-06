import { AgentData, AgentId } from '@/agent/data/agent.type';
import { Agent } from '@/agent/models/agent.model';
import { AttributeId } from '@/attribute/data/attribute.type';
import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineId } from '@/w-engine/data/w-engine.type';

const data: AgentData = {
    id: AgentId.HugoVlad,
    name: 'Hugo Vlad',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_7,
    attributeId: AttributeId.Ice,
    specialityId: SpecialityId.Attack,
    factionId: FactionId.Mockingbird,
    signatureWEngineId: WEngineId.MyriadEclipse,
};

const agent = new Agent(data);

export default agent;