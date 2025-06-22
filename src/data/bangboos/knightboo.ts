import { Bangboo } from '@/models/bangboo/bangboo.model';

import { BangbooData, BangbooId } from '../bangboo.type';
import { Rank } from '../rank.type';
import { VersionId } from '../version.type';

const data: BangbooData = {
    id: BangbooId.Knightboo,
    name: 'Knightboo',
    rank: Rank.A,
    firstVersionId: VersionId.Version_1_0,
    factionId: null,
};

const bangboo = new Bangboo(data);

export default bangboo;