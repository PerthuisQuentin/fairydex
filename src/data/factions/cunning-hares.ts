import { Faction } from '@/models/faction';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.CunningHares,
    name: 'Cunning Hares',
};

const faction = new Faction(data);

export default faction;