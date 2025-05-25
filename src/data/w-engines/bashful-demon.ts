import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.BashfulDemon,
    name: 'Bashful Demon',
    rank: Rank.A,
    signatureAgentId: AgentId.Soukaku,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Support,
};

const wEngine = new WEngine(data);

export default wEngine;