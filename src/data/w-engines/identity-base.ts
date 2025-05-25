import { WEngine } from '@/models/w-engine';

import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.IdentityBase,
    name: '[Identity] Base',
    rank: Rank.B,
    signatureAgentId: null,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Defense,
};

const wEngine = new WEngine(data);

export default wEngine;