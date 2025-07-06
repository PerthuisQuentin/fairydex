import { BangbooData, BangbooId } from '@/bangboo/data/bangboo.type';
import { Bangboo } from '@/bangboo/models/bangboo.model';
import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { VersionId } from '@/version/data/version.type';

const data: BangbooData = {
    id: BangbooId.Belion,
    name: 'Belion',
    rank: Rank.S,
    firstVersionId: VersionId.Version_2_0,
    factionId: FactionId.YunkuiSummit,
};

const bangboo = new Bangboo(data);

export default bangboo;