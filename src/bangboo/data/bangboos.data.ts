import { BangbooId } from '@/bangboo/data/bangboo.type';
import { Bangboo } from '@/bangboo/models/bangboo.model';
import { Bangboos } from '@/bangboo/models/bangboos.model';

import AgentGulliver from './raw-data/agent-gulliver';
import Amillion from './raw-data/amillion';
import Avocaboo from './raw-data/avocaboo';
import Baddieboo from './raw-data/baddieboo';
import Bagboo from './raw-data/bagboo';
import Bangvolver from './raw-data/bangvolver';
import Belion from './raw-data/belion';
import Boollseye from './raw-data/boollseye';
import Booressure from './raw-data/booressure';
import Brawlerboo from './raw-data/brawlerboo';
import Butler from './raw-data/butler';
import Cryboo from './raw-data/cryboo';
import Devilboo from './raw-data/devilboo';
import Electroboo from './raw-data/electroboo';
import Exploreboo from './raw-data/exploreboo';
import Knightboo from './raw-data/knightboo';
import Luckyboo from './raw-data/luckyboo';
import Magnetiboo from './raw-data/magnetiboo';
import MissEsme from './raw-data/miss-esme';
import OfficerCui from './raw-data/officer-cui';
import Overtimeboo from './raw-data/overtimeboo';
import Paperboo from './raw-data/paperboo';
import Penguinboo from './raw-data/penguinboo';
import Plugboo from './raw-data/plugboo';
import RedMoccus from './raw-data/red-moccus';
import Resonaboo from './raw-data/resonaboo';
import Robin from './raw-data/robin';
import Rocketboo from './raw-data/rocketboo';
import Safety from './raw-data/safety';
import Sharkboo from './raw-data/sharkboo';
import Snap from './raw-data/snap';
import Sumoboo from './raw-data/sumoboo';

const bangbooList: Bangboo[] = [
    AgentGulliver,
    Amillion,
    Avocaboo,
    Baddieboo,
    Bagboo,
    Bangvolver,
    Belion,
    Boollseye,
    Booressure,
    Brawlerboo,
    Butler,
    Cryboo,
    Devilboo,
    Electroboo,
    Exploreboo,
    Knightboo,
    Luckyboo,
    Magnetiboo,
    MissEsme,
    OfficerCui,
    Overtimeboo,
    Paperboo,
    Penguinboo,
    Plugboo,
    RedMoccus,
    Resonaboo,
    Robin,
    Rocketboo,
    Safety,
    Sharkboo,
    Snap,
    Sumoboo,
];

export const bangboos = new Bangboos(bangbooList);

export const getBangbooIconUrl = (bangbooId: BangbooId): string => `/bangboo-icons/${bangbooId}.png`;
