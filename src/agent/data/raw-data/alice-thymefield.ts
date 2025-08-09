import { Agent } from '@/agent/models/agent.model';
import { AgentId } from '@/agent/data/agent.type';
import { Rank } from '@/rank/data/rank.type';
import { AttributeId } from '@/attribute/data/attribute.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { FactionId } from '@/faction/data/faction.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineId } from '@/w-engine/data/w-engine.type';

const AliceThymefield: Agent = new Agent({
    id: AgentId.AliceThymefield,
    name: 'Alice Thymefield',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_2_1,
    attributeId: AttributeId.Physical,
    specialityId: SpecialityId.Anomaly,
    factionId: FactionId.SpookShack,
    signatureWEngineId: WEngineId.PracticedPerfection,
});

export default AliceThymefield;
