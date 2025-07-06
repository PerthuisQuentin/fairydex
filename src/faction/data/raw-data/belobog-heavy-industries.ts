import { FactionData, FactionId } from '@/faction/data/faction.type';
import { Faction } from '@/faction/models/faction.model';

const data: FactionData = {
    id: FactionId.BelobogHeavyIndustries,
    name: 'Belobog Heavy Industries',
};

const faction = new Faction(data);

export default faction;