import { WEngine } from '@/models/w-engine/w-engine.model';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.RoaringRide,
    name: 'Roaring Ride',
    rank: Rank.A,
    signatureAgentId: AgentId.PiperWheel,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Anomaly,
};

const wEngine = new WEngine(data);

export default wEngine;