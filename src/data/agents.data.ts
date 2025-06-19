import { Agent } from '@/models/agent';
import { Agents } from '@/models/agents';

import AlexandrinaSebastiane from './agents/alexandrina-sebastiane';
import AnbyDemara from './agents/anby-demara';
import AntonIvanov from './agents/anton-ivanov';
import AsabaHarumasa from './agents/asaba-harumasa';
import AstraYao from './agents/astra-yao';
import BenBigger from './agents/ben-bigger';
import BillyKid from './agents/billy-kid';
import BurniceWhite from './agents/burnice-white';
import CaesarKing from './agents/caesar-king';
import CorinWickes from './agents/corin-wickes';
import EllenJoe from './agents/ellen-joe';
import EvelynChevalier from './agents/evelyn-chevalier';
import GraceHoward from './agents/grace-howard';
import HoshimiMiyabi from './agents/hoshimi-miyabi';
import HugoVlad from './agents/hugo-vlad';
import JaneDoe from './agents/jane-doe';
import KoledaBelobog from './agents/koleda-belobog';
import Lighter from './agents/lighter';
import LucianaDeMontefio from './agents/luciana-de-montefio';
import NekomiyaMana from './agents/nekomiya-mana';
import NicoleDemara from './agents/nicole-demara';
import PanYinhu from './agents/pan-yinhu';
import PiperWheel from './agents/piper-wheel';
import PulchraFellini from './agents/pulchra-fellini';
import Qingyi from './agents/qingyi';
import SethLowell from './agents/seth-lowell';
import Soldier0Anby from './agents/soldier-0-anby';
import Soldier11 from './agents/soldier-11';
import Soukaku from './agents/soukaku';
import Trigger from './agents/trigger';
import TsukishiroYanagi from './agents/tsukishiro-yanagi';
import VivianBanshee from './agents/vivian-banshee';
import VonLycaon from './agents/von-lycaon';
import Yixuan from './agents/yi-xuan';
import ZhuYuan from './agents/zhu-yuan';

const agentList: Agent[] = [
    AlexandrinaSebastiane,
    AnbyDemara,
    AntonIvanov,
    AsabaHarumasa,
    AstraYao,
    BenBigger,
    BillyKid,
    BurniceWhite,
    CaesarKing,
    CorinWickes,
    EllenJoe,
    EvelynChevalier,
    GraceHoward,
    HoshimiMiyabi,
    HugoVlad,
    JaneDoe,
    KoledaBelobog,
    Lighter,
    LucianaDeMontefio,
    NekomiyaMana,
    NicoleDemara,
    PanYinhu,
    PiperWheel,
    PulchraFellini,
    Qingyi,
    SethLowell,
    Soldier0Anby,
    Soldier11,
    Soukaku,
    Trigger,
    TsukishiroYanagi,
    VivianBanshee,
    VonLycaon,
    Yixuan,
    ZhuYuan,
];

const agents = new Agents(agentList);

export default agents;