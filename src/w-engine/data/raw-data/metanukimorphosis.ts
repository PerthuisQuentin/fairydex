import { AgentId } from '@/agent/data/agent.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { WEngineData, WEngineId } from '@/w-engine/data/w-engine.type';
import { WEngine } from '@/w-engine/models/w-engine.model';

const data: WEngineData = {
    id: WEngineId.Metanukimorphosis,
    name: 'Metanukimorphosis',
    rank: Rank.S,
    signatureAgentId: AgentId.UkinamiYuzuha,
    isPermanent: false,
    firstVersionId: VersionId.Version_2_1,
    specialityId: SpecialityId.Support,
};

const wEngine = new WEngine(data);

export default wEngine;