import { Faction } from '@/models/faction/faction.model';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.Section6,
    name: 'Section 6',
};

const faction = new Faction(data);

export default faction;