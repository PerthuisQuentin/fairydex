import { Faction } from '@/models/faction';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.CriminalInvestigationSpecialResponseTeam,
    name: 'Criminal Investigation Special Response Team',
};

const faction = new Faction(data);

export default faction;