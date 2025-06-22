import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.AnbyDemara,
    name: 'Anby Demara',
    rank: Rank.A,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    attributeId: AttributeId.Electric,
    specialityId: SpecialityId.Stun,
    factionId: FactionId.CunningHares,
    signatureWEngineId: WEngineId.DemaraBatteryMarkII,
};

const agent = new Agent(data);

export default agent;