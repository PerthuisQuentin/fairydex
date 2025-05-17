import { Agent } from '@/models/agent';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';

const data: AgentData = {
    id: AgentId.VivianBanshee,
    name: 'Vivian Banshee',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_7,
    attributeId: AttributeId.Ether,
    specialityId: SpecialityId.Anomaly,
    factionId: FactionId.Mockingbird,
};

const agent = new Agent(data);

export default agent;