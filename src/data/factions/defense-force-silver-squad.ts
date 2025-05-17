import { Faction } from '@/models/faction';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.DefenseForceSilverSquad,
    name: 'Defense Force Silver Squad',
};

const faction = new Faction(data);

export default faction;