import { Agent } from '@/models/agent';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';

const data: AgentData = {
    id: AgentId.NicoleDemara,
    name: 'Nicole Demara',
    rank: Rank.A,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    attributeId: AttributeId.Ether,
    specialityId: SpecialityId.Support,
    factionId: FactionId.CunningHares,
};

const agent = new Agent(data);

export default agent;