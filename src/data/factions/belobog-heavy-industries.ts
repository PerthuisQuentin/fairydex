import { Faction } from '@/models/faction';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.BelobogHeavyIndustries,
    name: 'Belobog Heavy Industries',
};

const faction = new Faction(data);

export default faction;