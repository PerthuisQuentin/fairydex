import { Faction } from '@/models/faction';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.StarsOfLyra,
    name: 'Stars of Lyra',
};

const faction = new Faction(data);

export default faction;