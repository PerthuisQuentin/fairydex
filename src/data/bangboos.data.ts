import { Bangboo } from '@/models/bangboo';
import { Bangboos } from '@/models/bangboos';

import AgentGulliver from './bangboos/agent-gulliver';
import Amillion from './bangboos/amillion';
import Avocaboo from './bangboos/avocaboo';
import Baddieboo from './bangboos/baddieboo';
import Bagboo from './bangboos/bagboo';
import Bangvolver from './bangboos/bangvolver';
import Boollseye from './bangboos/boollseye';
import Booressure from './bangboos/booressure';
import Brawlerboo from './bangboos/brawlerboo';
import Butler from './bangboos/butler';
import Cryboo from './bangboos/cryboo';
import Devilboo from './bangboos/devilboo';
import Electroboo from './bangboos/electroboo';
import Exploreboo from './bangboos/exploreboo';
import Knightboo from './bangboos/knightboo';
import Luckyboo from './bangboos/luckyboo';
import Magnetiboo from './bangboos/magnetiboo';
import OfficerCui from './bangboos/officer-cui';
import Overtimeboo from './bangboos/overtimeboo';
import Paperboo from './bangboos/paperboo';
import Penguinboo from './bangboos/penguinboo';
import Plugboo from './bangboos/plugboo';
import RedMoccus from './bangboos/red-moccus';
import Resonaboo from './bangboos/resonaboo';
import Robin from './bangboos/robin';
import Rocketboo from './bangboos/rocketboo';
import Safety from './bangboos/safety';
import Sharkboo from './bangboos/sharkboo';
import Snap from './bangboos/snap';
import Sumoboo from './bangboos/sumoboo';

const bangbooList: Bangboo[] = [
    AgentGulliver,
    Amillion,
    Avocaboo,
    Baddieboo,
    Bagboo,
    Bangvolver,
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

const bangboos = new Bangboos(bangbooList);

export default bangboos;