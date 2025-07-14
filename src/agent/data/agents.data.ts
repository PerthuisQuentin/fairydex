import { AgentId } from '@/agent/data/agent.type';
import { Agent } from '@/agent/models/agent.model';
import { Agents } from '@/agent/models/agents.model';

import AlexandrinaSebastiane from './raw-data/alexandrina-sebastiane';
import AnbyDemara from './raw-data/anby-demara';
import AntonIvanov from './raw-data/anton-ivanov';
import AsabaHarumasa from './raw-data/asaba-harumasa';
import AstraYao from './raw-data/astra-yao';
import BenBigger from './raw-data/ben-bigger';
import BillyKid from './raw-data/billy-kid';
import BurniceWhite from './raw-data/burnice-white';
import CaesarKing from './raw-data/caesar-king';
import CorinWickes from './raw-data/corin-wickes';
import EllenJoe from './raw-data/ellen-joe';
import EvelynChevalier from './raw-data/evelyn-chevalier';
import GraceHoward from './raw-data/grace-howard';
import HoshimiMiyabi from './raw-data/hoshimi-miyabi';
import HugoVlad from './raw-data/hugo-vlad';
import JaneDoe from './raw-data/jane-doe';
import JuFufu from './raw-data/ju-fufu';
import KoledaBelobog from './raw-data/koleda-belobog';
import Lighter from './raw-data/lighter';
import LucianaDeMontefio from './raw-data/luciana-de-montefio';
import NekomiyaMana from './raw-data/nekomiya-mana';
import NicoleDemara from './raw-data/nicole-demara';
import PanYinhu from './raw-data/pan-yinhu';
import PiperWheel from './raw-data/piper-wheel';
import PulchraFellini from './raw-data/pulchra-fellini';
import Qingyi from './raw-data/qingyi';
import SethLowell from './raw-data/seth-lowell';
import Soldier0Anby from './raw-data/soldier-0-anby';
import Soldier11 from './raw-data/soldier-11';
import Soukaku from './raw-data/soukaku';
import Trigger from './raw-data/trigger';
import TsukishiroYanagi from './raw-data/tsukishiro-yanagi';
import VivianBanshee from './raw-data/vivian-banshee';
import VonLycaon from './raw-data/von-lycaon';
import Yixuan from './raw-data/yi-xuan';
import ZhuYuan from './raw-data/zhu-yuan';

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
    JuFufu,
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

export const agents = new Agents(agentList);

export const getAgentSplashArtUrl = (agentId: AgentId): string => `/agent-splash-arts/${agentId}.png`;

export const getAgentIconUrl = (agentId: AgentId): string => `/agent-icons/${agentId}.png`;
