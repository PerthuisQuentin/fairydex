import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.FlamemakerShaker,
    name: 'Flamemaker Shaker',
    rank: Rank.S,
    signatureAgentId: AgentId.BurniceWhite,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_2,
    specialityId: SpecialityId.Anomaly,
};

const wEngine = new WEngine(data);

export default wEngine;