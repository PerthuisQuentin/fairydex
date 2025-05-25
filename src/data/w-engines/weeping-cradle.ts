import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.WeepingCradle,
    name: 'Weeping Cradle',
    rank: Rank.S,
    signatureAgentId: AgentId.AlexandrinaSebastiane,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Support,
};

const wEngine = new WEngine(data);

export default wEngine;