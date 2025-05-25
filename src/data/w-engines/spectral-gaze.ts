import { WEngine } from '@/models/w-engine';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.SpectralGaze,
    name: 'Spectral Gaze',
    rank: Rank.S,
    signatureAgentId: AgentId.Trigger,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_6,
    specialityId: SpecialityId.Stun,
};

const wEngine = new WEngine(data);

export default wEngine;