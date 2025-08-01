
import { FactionId } from '@/faction/data/faction.type';
import { Faction } from '@/faction/models/faction.model';
import { Factions } from '@/faction/models/factions.model';

import BelobogHeavyIndustries from './raw-data/belobog-heavy-industries';
import CriminalInvestigationSpecialResponseTeam from './raw-data/criminal-investigation-special-response-team';
import CunningHares from './raw-data/cunning-hares';
import DefenseForceSilverSquad from './raw-data/defense-force-silver-squad';
import Mockingbird from './raw-data/mockingbird';
import ObolSquad from './raw-data/obol-squad';
import Section6 from './raw-data/section-6';
import SonsOfCalydon from './raw-data/sons-of-calydon';
import SpookShack from './raw-data/spook-shack';
import StarsOfLyra from './raw-data/stars-of-lyra';
import VictoriaHousekeeping from './raw-data/victoria-housekeeping';
import YunkuiSummit from './raw-data/yunkui-summit';

const factionList: Faction[] = [
    BelobogHeavyIndustries,
    CriminalInvestigationSpecialResponseTeam,
    CunningHares,
    DefenseForceSilverSquad,
    Mockingbird,
    ObolSquad,
    Section6,
    SonsOfCalydon,
    SpookShack,
    StarsOfLyra,
    VictoriaHousekeeping,
    YunkuiSummit,
];

export const factions = new Factions(factionList);

export const getFactionIconUrl = (factionId: FactionId): string => `/faction-icons/64x64/${factionId}.webp`;

export const getFactionArtUrl = (factionId: FactionId): string => `/faction-icons/256x256/${factionId}.webp`;