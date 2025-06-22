import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.GraceHoward,
    name: 'Grace Howard',
    rank: Rank.S,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    attributeId: AttributeId.Electric,
    specialityId: SpecialityId.Anomaly,
    factionId: FactionId.BelobogHeavyIndustries,
    signatureWEngineId: WEngineId.FusionCompiler,
};

const agent = new Agent(data);

export default agent;