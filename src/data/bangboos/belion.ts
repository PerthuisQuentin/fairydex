import { Bangboo } from '@/models/bangboo';

import { BangbooData, BangbooId } from '../bangboo.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { VersionId } from '../version.type';

const data: BangbooData = {
    id: BangbooId.Belion,
    name: 'Belion',
    rank: Rank.S,
    firstVersionId: VersionId.Version_2_0,
    factionId: FactionId.YunkuiSummit,
};

const bangboo = new Bangboo(data);

export default bangboo;