import { WEngine } from '@/models/w-engine';

import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.RadiowaveJourney,
    name: 'Radiowave Journey',
    rank: Rank.A,
    signatureAgentId: null,
    isPermanent: false,
    firstVersionId: VersionId.Version_2_0,
    specialityId: SpecialityId.Rupture,
};

const wEngine = new WEngine(data);

export default wEngine;