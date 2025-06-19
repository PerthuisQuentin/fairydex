import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.QingmingBirdcage,
    name: 'Qingming Birdcage',
    rank: Rank.S,
    signatureAgentId: AgentId.YiXuan,
    isPermanent: false,
    firstVersionId: VersionId.Version_2_0,
    specialityId: SpecialityId.Rupture,
};

const wEngine = new WEngine(data);

export default wEngine;