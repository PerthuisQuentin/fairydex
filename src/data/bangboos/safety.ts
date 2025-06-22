import { Bangboo } from '@/models/bangboo/bangboo.model';

import { BangbooData, BangbooId } from '../bangboo.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { VersionId } from '../version.type';

const data: BangbooData = {
    id: BangbooId.Safety,
    name: 'Safety',
    rank: Rank.S,
    firstVersionId: VersionId.Version_1_0,
    factionId: FactionId.BelobogHeavyIndustries,
};

const bangboo = new Bangboo(data);

export default bangboo;