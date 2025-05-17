import { Agent } from '@/models/agent';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';

const data: AgentData = {
    id: AgentId.Qingyi,
    name: 'Qingyi',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_1,
    attributeId: AttributeId.Electric,
    specialityId: SpecialityId.Stun,
    factionId: FactionId.CriminalInvestigationSpecialResponseTeam,
};

const agent = new Agent(data);

export default agent;