import { BangbooData, BangbooId } from '@/bangboo/data/bangboo.type';
import { Bangboo } from '@/bangboo/models/bangboo.model';
import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { VersionId } from '@/version/data/version.type';

const data: BangbooData = {
    id: BangbooId.AgentGulliver,
    name: 'Agent Gulliver',
    rank: Rank.S,
    firstVersionId: VersionId.Version_1_0,
    factionId: FactionId.Section6,
};

const bangboo = new Bangboo(data);

export default bangboo;