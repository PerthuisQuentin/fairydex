import { FactionData, FactionId } from '@/faction/data/faction.type';
import { Faction } from '@/faction/models/faction.model';

const data: FactionData = {
    id: FactionId.VictoriaHousekeeping,
    name: 'Victoria Housekeeping',
};

const faction = new Faction(data);

export default faction;