import { WEngine } from '@/models/w-engine/w-engine.model';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.TusksOfFury,
    name: 'Tusks of Fury',
    rank: Rank.S,
    signatureAgentId: AgentId.CaesarKing,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_2,
    specialityId: SpecialityId.Defense,
};

const wEngine = new WEngine(data);

export default wEngine;