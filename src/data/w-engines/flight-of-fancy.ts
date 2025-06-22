import { WEngine } from '@/models/w-engine/w-engine.model';

import { AgentId } from '../agent.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineData, WEngineId } from '../w-engine.type';

const data: WEngineData = {
    id: WEngineId.FlightOfFancy,
    name: 'Flight of Fancy',
    rank: Rank.S,
    signatureAgentId: AgentId.VivianBanshee,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_7,
    specialityId: SpecialityId.Anomaly,
};

const wEngine = new WEngine(data);

export default wEngine;