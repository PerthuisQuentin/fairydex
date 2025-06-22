import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.JaneDoe,
    name: 'Jane Doe',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_1,
    attributeId: AttributeId.Physical,
    specialityId: SpecialityId.Anomaly,
    factionId: FactionId.CriminalInvestigationSpecialResponseTeam,
    signatureWEngineId: WEngineId.SharpenedStinger,
};

const agent = new Agent(data);

export default agent;