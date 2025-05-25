import { Agent } from '@/models/agent';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.BurniceWhite,
    name: 'Burnice White',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_2,
    attributeId: AttributeId.Fire,
    specialityId: SpecialityId.Anomaly,
    factionId: FactionId.SonsOfCalydon,
    signatureWEngineId: WEngineId.FlamemakerShaker,
};

const agent = new Agent(data);

export default agent;