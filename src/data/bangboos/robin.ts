import { Bangboo } from '@/models/bangboo';

import { BangbooData, BangbooId } from '../bangboo.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { VersionId } from '../version.type';

const data: BangbooData = {
    id: BangbooId.Robin,
    name: 'Robin',
    rank: Rank.S,
    firstVersionId: VersionId.Version_1_0,
    factionId: FactionId.Mockingbird,
};

const bangboo = new Bangboo(data);

export default bangboo;