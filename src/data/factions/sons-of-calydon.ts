import { Faction } from '@/models/faction/faction.model';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.SonsOfCalydon,
    name: 'Sons of Calydon',
};

const faction = new Faction(data);

export default faction;