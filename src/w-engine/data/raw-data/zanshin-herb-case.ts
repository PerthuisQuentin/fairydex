import { AgentId } from '@/agent/data/agent.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineData, WEngineId } from '@/w-engine/data/w-engine.type';
import { WEngine } from '@/w-engine/models/w-engine.model';

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