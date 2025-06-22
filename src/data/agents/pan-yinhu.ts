import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.PanYinhu,
    name: 'Pan Yinhu',
    rank: Rank.A,
    isPermanent: false,
    firstVersionId: VersionId.Version_2_0,
    attributeId: AttributeId.Physical,
    specialityId: SpecialityId.Defense,
    factionId: FactionId.YunkuiSummit,
    signatureWEngineId: WEngineId.TremorTrigramVessel,
};

const agent = new Agent(data);

export default agent;