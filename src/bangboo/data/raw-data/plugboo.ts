import { BangbooData, BangbooId } from '@/bangboo/data/bangboo.type';
import { Bangboo } from '@/bangboo/models/bangboo.model';
import { Rank } from '@/rank/data/rank.type';
import { VersionId } from '@/version/data/version.type';

const data: BangbooData = {
    id: BangbooId.Plugboo,
    name: 'Plugboo',
    rank: Rank.S,
    firstVersionId: VersionId.Version_1_0,
    factionId: null,
};

const bangboo = new Bangboo(data);

export default bangboo;