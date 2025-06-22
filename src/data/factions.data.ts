
import { Faction } from '@/models/faction/faction.model';
import { Factions } from '@/models/faction/factions.model';

import { FactionId } from './faction.type';
import BelobogHeavyIndustries from './factions/belobog-heavy-industries';
import CriminalInvestigationSpecialResponseTeam from './factions/criminal-investigation-special-response-team';
import CunningHares from './factions/cunning-hares';
import DefenseForceSilverSquad from './factions/defense-force-silver-squad';
import Mockingbird from './factions/mockingbird';
import ObolSquad from './factions/obol-squad';
import Section6 from './factions/section-6';
import SonsOfCalydon from './factions/sons-of-calydon';
import StarsOfLyra from './factions/stars-of-lyra';
import VictoriaHousekeeping from './factions/victoria-housekeeping';
import YunkuiSummit from './factions/yunkui-summit';

const factionList: Faction[] = [
    BelobogHeavyIndustries,
    CriminalInvestigationSpecialResponseTeam,
    CunningHares,
    DefenseForceSilverSquad,
    Mockingbird,
    ObolSquad,
    Section6,
    SonsOfCalydon,
    StarsOfLyra,
    VictoriaHousekeeping,
    YunkuiSummit,
];

export const factions = new Factions(factionList);

export const getFactionIconUrl = (factionId: FactionId): string => `/faction-icons/${factionId}.webp`;