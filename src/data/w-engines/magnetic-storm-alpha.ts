import { WEngine } from '@/models/w-engine/w-engine.model';

import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.MagneticStormAlpha,
    name: '[Magnetic Storm] Alpha',
    rank: Rank.B,
    signatureAgentId: null,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Anomaly,
};

const wEngine = new WEngine(data);

export default wEngine;