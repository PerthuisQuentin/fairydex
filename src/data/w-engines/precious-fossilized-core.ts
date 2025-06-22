import { WEngine } from '@/models/w-engine/w-engine.model';

import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.PreciousFossilizedCore,
    name: 'Precious Fossilized Core',
    rank: Rank.A,
    signatureAgentId: null,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Stun,
};

const wEngine = new WEngine(data);

export default wEngine;