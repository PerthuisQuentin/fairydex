import { WEngineId } from '@/w-engine/data/w-engine.type';
import { WEngine } from '@/w-engine/models/w-engine.model';
import { WEngines } from '@/w-engine/models/w-engines.model';

import BashfulDemon from './raw-data/bashful-demon';
import BigCylinder from './raw-data/big-cylinder';
import BlazingLaurel from './raw-data/blazing-laurel';
import BoxCutter from './raw-data/box-cutter';
import BunnyBand from './raw-data/bunny-band';
import CannonRotor from './raw-data/cannon-rotor';
import CinderCobalt from './raw-data/cinder-cobalt';
import DeepSeaVisitor from './raw-data/deep-sea-visitor';
import DemaraBatteryMarkII from './raw-data/demara-battery-mark-ii';
import DrillRigRedAxis from './raw-data/drill-rig-red-axis';
import ElectroLipGloss from './raw-data/electro-lip-gloss';
import ElegantVanity from './raw-data/elegant-vanity';
import FlamemakerShaker from './raw-data/flamemaker-shaker';
import FlightOfFancy from './raw-data/flight-of-fancy';
import FusionCompiler from './raw-data/fusion-compiler';
import GildedBlossom from './raw-data/gilded-blossom';
import HailstormShrine from './raw-data/hailstorm-shrine';
import HeartstringNocturne from './raw-data/heartstring-nocturne';
import HellfireGears from './raw-data/hellfire-gears';
import Housekeeper from './raw-data/housekeeper';
import IceJadeTeapot from './raw-data/ice-jade-teapot';
import IdentityBase from './raw-data/identity-base';
import IdentityInflection from './raw-data/identity-inflection';
import KaboomTheCannon from './raw-data/kaboom-the-cannon';
import LunarDecrescent from './raw-data/lunar-decrescent';
import LunarNoviluna from './raw-data/lunar-noviluna';
import LunarPleniluna from './raw-data/lunar-pleniluna';
import MagneticStormAlpha from './raw-data/magnetic-storm-alpha';
import MagneticStormBravo from './raw-data/magnetic-storm-bravo';
import MagneticStormCharlie from './raw-data/magnetic-storm-charlie';
import MarcatoDesire from './raw-data/marcato-desire';
import Metanukimorphosis from './raw-data/metanukimorphosis';
import MyriadEclipse from './raw-data/myriad-eclipse';
import OriginalTransmorpher from './raw-data/original-transmorpher';
import PeacekeeperSpecialized from './raw-data/peacekeeper-specialized';
import PracticedPerfection from './raw-data/practiced-perfection';
import PreciousFossilizedCore from './raw-data/precious-fossilized-core';
import PuzzleSphere from './raw-data/puzzle-sphere';
import QingmingBirdcage from './raw-data/qingming-birdcage';
import RadiowaveJourney from './raw-data/radiowave-journey';
import RainforestGourmet from './raw-data/rainforest-gourmet';
import ReelProjector from './raw-data/reel-projector';
import ReverbMarkI from './raw-data/reverb-mark-i';
import ReverbMarkII from './raw-data/reverb-mark-ii';
import ReverbMarkIII from './raw-data/reverb-mark-iii';
import RiotSuppressorMarkVI from './raw-data/riot-suppressor-mark-vi';
import RoaringFurnace from './raw-data/roaring-furnace';
import RoaringRide from './raw-data/roaring-ride';
import SeveredInnocence from './raw-data/severed-innocence';
import SharpenedStinger from './raw-data/sharpened-stinger';
import SixShooter from './raw-data/six-shooter';
import SliceOfTime from './raw-data/slice-of-time';
import SpectralGaze from './raw-data/spectral-gaze';
import SpringEmbrace from './raw-data/spring-embrace';
import StarlightEngine from './raw-data/starlight-engine';
import StarlightEngineReplica from './raw-data/starlight-engine-replica';
import SteamOven from './raw-data/steam-oven';
import SteelCushion from './raw-data/steel-cushion';
import StreetSuperstar from './raw-data/street-superstar';
import TheBrimstone from './raw-data/the-brimstone';
import TheRestrained from './raw-data/the-restrained';
import TheVault from './raw-data/the-vault';
import Timeweaver from './raw-data/timeweaver';
import TremorTrigramVessel from './raw-data/tremor-trigram-vessel';
import TusksOfFury from './raw-data/tusks-of-fury';
import UnfetteredGameBall from './raw-data/unfettered-game-ball';
import VortexArrow from './raw-data/vortex-arrow';
import VortexHatchet from './raw-data/vortex-hatchet';
import VortexRevolver from './raw-data/vortex-revolver';
import WeepingCradle from './raw-data/weeping-cradle';
import WeepingGemini from './raw-data/weeping-gemini';
import ZanshinHerbCase from './raw-data/zanshin-herb-case';

const wEngineList: WEngine[] = [
    BashfulDemon,
    BigCylinder,
    BlazingLaurel,
    BoxCutter,
    BunnyBand,
    CannonRotor,
    CinderCobalt,
    DeepSeaVisitor,
    DemaraBatteryMarkII,
    DrillRigRedAxis,
    ElectroLipGloss,
    ElegantVanity,
    FlamemakerShaker,
    FlightOfFancy,
    FusionCompiler,
    GildedBlossom,
    HailstormShrine,
    HeartstringNocturne,
    HellfireGears,
    Housekeeper,
    IceJadeTeapot,
    IdentityBase,
    IdentityInflection,
    KaboomTheCannon,
    LunarDecrescent,
    LunarNoviluna,
    LunarPleniluna,
    MagneticStormAlpha,
    MagneticStormBravo,
    MagneticStormCharlie,
    MarcatoDesire,
    Metanukimorphosis,
    MyriadEclipse,
    OriginalTransmorpher,
    PeacekeeperSpecialized,
    PracticedPerfection,
    PreciousFossilizedCore,
    PuzzleSphere,
    QingmingBirdcage,
    RadiowaveJourney,
    RainforestGourmet,
    ReelProjector,
    ReverbMarkI,
    ReverbMarkII,
    ReverbMarkIII,
    RiotSuppressorMarkVI,
    RoaringFurnace,
    RoaringRide,
    SeveredInnocence,
    SharpenedStinger,
    SixShooter,
    SliceOfTime,
    SpectralGaze,
    SpringEmbrace,
    StarlightEngine,
    StarlightEngineReplica,
    SteamOven,
    SteelCushion,
    StreetSuperstar,
    TheBrimstone,
    TheRestrained,
    TheVault,
    Timeweaver,
    TremorTrigramVessel,
    TusksOfFury,
    UnfetteredGameBall,
    VortexArrow,
    VortexHatchet,
    VortexRevolver,
    WeepingCradle,
    WeepingGemini,
    ZanshinHerbCase,
];

export const wEngines = new WEngines(wEngineList);

export const getWEngineIconUrl = (wEngineId: WEngineId): string => `/w-engine-icons/256x256/${wEngineId}.webp`;