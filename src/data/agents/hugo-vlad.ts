import { Agent } from '@/models/agent';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';

const data: AgentData = {
    id: AgentId.HugoVlad,
    name: 'Hugo Vlad',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_7,
    attributeId: AttributeId.Ice,
    specialityId: SpecialityId.Attack,
    factionId: FactionId.Mockingbird,
};

const agent = new Agent(data);

export default agent;