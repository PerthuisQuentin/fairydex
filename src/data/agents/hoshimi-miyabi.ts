import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.HoshimiMiyabi,
    name: 'Hoshimi Miyabi',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_4,
    attributeId: AttributeId.Frost,
    specialityId: SpecialityId.Anomaly,
    factionId: FactionId.Section6,
    signatureWEngineId: WEngineId.HailstormShrine,
};

const agent = new Agent(data);

export default agent;