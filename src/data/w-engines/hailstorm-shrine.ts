import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.HailstormShrine,
    name: 'Hailstorm Shrine',
    rank: Rank.S,
    signatureAgentId: AgentId.HoshimiMiyabi,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_4,
    specialityId: SpecialityId.Anomaly,
};

const wEngine = new WEngine(data);

export default wEngine;