import { FactionId } from '@/faction/data/faction.type';
import { Rank } from '@/rank/data/rank.type';
import { VersionId } from '@/version/data/version.type';

export enum BangbooId {
    AgentGulliver = 'agent-gulliver',
    Amillion = 'amillion',
    Avocaboo = 'avocaboo',
    Baddieboo = 'baddieboo',
    Bagboo = 'bagboo',
    Bangvolver = 'bangvolver',
    Belion = 'belion',
    Boollseye = 'boollseye',
    Booressure = 'booressure',
    Brawlerboo = 'brawlerboo',
    Butler = 'butler',
    Cryboo = 'cryboo',
    Devilboo = 'devilboo',
    Electroboo = 'electroboo',
    Exploreboo = 'exploreboo',
    Knightboo = 'knightboo',
    Luckyboo = 'luckyboo',
    Magnetiboo = 'magnetiboo',
    MissEsme = 'miss-esme',
    OfficerCui = 'officer-cui',
    Overtimeboo = 'overtimeboo',
    Paperboo = 'paperboo',
    Penguinboo = 'penguinboo',
    Plugboo = 'plugboo',
    RedMoccus = 'red-moccus',
    Resonaboo = 'resonaboo',
    Robin = 'robin',
    Rocketboo = 'rocketboo',
    Safety = 'safety',
    Sharkboo = 'sharkboo',
    Snap = 'snap',
    Sumoboo = 'sumoboo',
}

export type BangbooData = {
    id: BangbooId;
    name: string;
    rank: Rank;
    factionId: FactionId | null;
    firstVersionId: VersionId;
}
