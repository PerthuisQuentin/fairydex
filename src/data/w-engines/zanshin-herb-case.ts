import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.ZanshinHerbCase,
    name: 'Zanshin Herb Case',
    rank: Rank.S,
    signatureAgentId: AgentId.AsabaHarumasa,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_4,
    specialityId: SpecialityId.Attack,
};

const wEngine = new WEngine(data);

export default wEngine;