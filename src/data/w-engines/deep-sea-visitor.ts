import { WEngine } from '@/models/w-engine/w-engine.model';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.DeepSeaVisitor,
    name: 'Deep Sea Visitor',
    rank: Rank.S,
    signatureAgentId: AgentId.EllenJoe,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Attack,
};

const wEngine = new WEngine(data);

export default wEngine;