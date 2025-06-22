import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.PulchraFellini,
    name: 'Pulchra Fellini',
    rank: Rank.A,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_6,
    attributeId: AttributeId.Physical,
    specialityId: SpecialityId.Stun,
    factionId: FactionId.SonsOfCalydon,
    signatureWEngineId: WEngineId.BoxCutter,
};

const agent = new Agent(data);

export default agent;