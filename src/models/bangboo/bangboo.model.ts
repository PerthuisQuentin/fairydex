import { BangbooData, BangbooId } from '@/data/bangboo.type';
import { FactionId } from '@/data/faction.type';
import { Rank } from '@/data/rank.type';
import { VersionId } from '@/data/version.type';

export class Bangboo {
    public readonly id: BangbooId;
    public readonly name: string;
    public readonly rank: Rank;
    public readonly factionId: FactionId | null;
    public readonly firstVersionId: VersionId;

    constructor(bangbooData: BangbooData) {
        this.id = bangbooData.id;
        this.name = bangbooData.name;
        this.rank = bangbooData.rank;
        this.factionId = bangbooData.factionId;
        this.firstVersionId = bangbooData.firstVersionId;
    }
}