import { WEngine } from '@/models/w-engine/w-engine.model';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.HellfireGears,
    name: 'Hellfire Gears',
    rank: Rank.S,
    signatureAgentId: AgentId.KoledaBelobog,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    specialityId: SpecialityId.Stun,
};

const wEngine = new WEngine(data);

export default wEngine;