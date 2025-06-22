import { WEngine } from '@/models/w-engine/w-engine.model';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.PeacekeeperSpecialized,
    name: 'Peacekeeper - Specialized',
    rank: Rank.A,
    signatureAgentId: AgentId.SethLowell,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_1,
    specialityId: SpecialityId.Defense,
};

const wEngine = new WEngine(data);

export default wEngine;