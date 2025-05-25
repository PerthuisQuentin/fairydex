import { AgentId } from '@/data/agent.type';
import { Rank } from '@/data/rank.type';
import { SpecialityId } from '@/data/speciality.type';
import { VersionId } from '@/data/version.type';
import { WEngineData, WEngineId } from '@/data/w-engine.type';

export class WEngine {
    public readonly id: WEngineId;
    public readonly name: string;
    public readonly rank: Rank;
    public readonly signatureAgentId: AgentId | null;
    public readonly isPermanent: boolean;
    public readonly specialityId: SpecialityId;
    public readonly firstVersionId: VersionId;

    constructor(wEngineData: WEngineData) {
        this.id = wEngineData.id;
        this.name = wEngineData.name;
        this.rank = wEngineData.rank;
        this.signatureAgentId = wEngineData.signatureAgentId;
        this.isPermanent = wEngineData.isPermanent;
        this.specialityId = wEngineData.specialityId;
        this.firstVersionId = wEngineData.firstVersionId;
    }
}