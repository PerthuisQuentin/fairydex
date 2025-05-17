import { Faction } from '@/models/faction';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.ObolSquad,
    name: 'Obol Squad',
};

const faction = new Faction(data);

export default faction;