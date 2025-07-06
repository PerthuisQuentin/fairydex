import { FactionData, FactionId } from '@/faction/data/faction.type';
import { Faction } from '@/faction/models/faction.model';

const data: FactionData = {
    id: FactionId.CriminalInvestigationSpecialResponseTeam,
    name: 'Criminal Investigation Special Response Team',
};

const faction = new Faction(data);

export default faction;