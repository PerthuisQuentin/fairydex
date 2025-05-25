import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.IceJadeTeapot,
    name: 'Ice Jade Teapot',
    rank: Rank.S,
    signatureAgentId: AgentId.Qingyi,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_1,
    specialityId: SpecialityId.Stun,
};

const wEngine = new WEngine(data);

export default wEngine;