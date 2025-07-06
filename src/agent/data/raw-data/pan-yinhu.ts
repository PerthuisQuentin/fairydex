import { AgentData, AgentId } from '@/agent/data/agent.type';
import { Agent } from '@/agent/models/agent.model';
import { AttributeId } from '@/attribute/data/attribute.type';
import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineId } from '@/w-engine/data/w-engine.type';

const data: AgentData = {
    id: AgentId.PanYinhu,
    name: 'Pan Yinhu',
    rank: Rank.A,
    isPermanent: false,
    firstVersionId: VersionId.Version_2_0,
    attributeId: AttributeId.Physical,
    specialityId: SpecialityId.Defense,
    factionId: FactionId.YunkuiSummit,
    signatureWEngineId: WEngineId.TremorTrigramVessel,
};

const agent = new Agent(data);

export default agent;