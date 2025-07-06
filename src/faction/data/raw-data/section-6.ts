import { FactionData, FactionId } from '@/faction/data/faction.type';
import { Faction } from '@/faction/models/faction.model';

const data: FactionData = {
    id: FactionId.Section6,
    name: 'Section 6',
};

const faction = new Faction(data);

export default faction;