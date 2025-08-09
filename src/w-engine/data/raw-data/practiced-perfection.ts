import { WEngine } from '@/w-engine/models/w-engine.model';
import { WEngineId } from '@/w-engine/data/w-engine.type';
import { Rank } from '@/rank/data/rank.type';
import { SpecialityId } from '@/speciality/data/speciality.type';
import { VersionId } from '@/version/data/version.type';
import { AgentId } from '@/agent/data/agent.type';

const PracticedPerfection: WEngine = new WEngine({
    id: WEngineId.PracticedPerfection,
    name: 'Practiced Perfection',
    rank: Rank.S,
    signatureAgentId: AgentId.AliceThymefield,
    isPermanent: false,
    specialityId: SpecialityId.Anomaly,
    firstVersionId: VersionId.Version_2_1,
});

export default PracticedPerfection;
