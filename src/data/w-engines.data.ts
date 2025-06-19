import { WEngine } from '@/models/w-engine';
import { WEngines } from '@/models/w-engines';

import BashfulDemon from './w-engines/bashful-demon';
import BigCylinder from './w-engines/big-cylinder';
import BlazingLaurel from './w-engines/blazing-laurel';
import BoxCutter from './w-engines/box-cutter';
import BunnyBand from './w-engines/bunny-band';
import CannonRotor from './w-engines/cannon-rotor';
import CinderCobalt from './w-engines/cinder-cobalt';
import DeepSeaVisitor from './w-engines/deep-sea-visitor';
import DemaraBatteryMarkII from './w-engines/demara-battery-mark-ii';
import DrillRigRedAxis from './w-engines/drill-rig-red-axis';
import ElectroLipGloss from './w-engines/electro-lip-gloss';
import ElegantVanity from './w-engines/elegant-vanity';
import FlamemakerShaker from './w-engines/flamemaker-shaker';
import FlightOfFancy from './w-engines/flight-of-fancy';
import FusionCompiler from './w-engines/fusion-compiler';
import GildedBlossom from './w-engines/gilded-blossom';
import HailstormShrine from './w-engines/hailstorm-shrine';
import HeartstringNocturne from './w-engines/heartstring-nocturne';
import HellfireGears from './w-engines/hellfire-gears';
import Housekeeper from './w-engines/housekeeper';
import IceJadeTeapot from './w-engines/ice-jade-teapot';
import IdentityBase from './w-engines/identity-base';
import IdentityInflection from './w-engines/identity-inflection';
import KaboomTheCannon from './w-engines/kaboom-the-cannon';
import LunarDecrescent from './w-engines/lunar-decrescent';
import LunarNoviluna from './w-engines/lunar-noviluna';
import LunarPleniluna from './w-engines/lunar-pleniluna';
import MagneticStormAlpha from './w-engines/magnetic-storm-alpha';
import MagneticStormBravo from './w-engines/magnetic-storm-bravo';
import MagneticStormCharlie from './w-engines/magnetic-storm-charlie';
import MarcatoDesire from './w-engines/marcato-desire';
import MyriadEclipse from './w-engines/myriad-eclipse';
import OriginalTransmorpher from './w-engines/original-transmorpher';
import PeacekeeperSpecialized from './w-engines/peacekeeper-specialized';
import PreciousFossilizedCore from './w-engines/precious-fossilized-core';
import PuzzleSphere from './w-engines/puzzle-sphere';
import QingmingBirdcage from './w-engines/qingming-birdcage';
import RadiowaveJourney from './w-engines/radiowave-journey';
import RainforestGourmet from './w-engines/rainforest-gourmet';
import ReelProjector from './w-engines/reel-projector';
import ReverbMarkI from './w-engines/reverb-mark-i';
import ReverbMarkII from './w-engines/reverb-mark-ii';
import ReverbMarkIII from './w-engines/reverb-mark-iii';
import RiotSuppressorMarkVI from './w-engines/riot-suppressor-mark-vi';
import RoaringRide from './w-engines/roaring-ride';
import SeveredInnocence from './w-engines/severed-innocence';
import SharpenedStinger from './w-engines/sharpened-stinger';
import SixShooter from './w-engines/six-shooter';
import SliceOfTime from './w-engines/slice-of-time';
import SpectralGaze from './w-engines/spectral-gaze';
import SpringEmbrace from './w-engines/spring-embrace';
import StarlightEngine from './w-engines/starlight-engine';
import StarlightEngineReplica from './w-engines/starlight-engine-replica';
import SteamOven from './w-engines/steam-oven';
import SteelCushion from './w-engines/steel-cushion';
import StreetSuperstar from './w-engines/street-superstar';
import TheBrimstone from './w-engines/the-brimstone';
import TheRestrained from './w-engines/the-restrained';
import TheVault from './w-engines/the-vault';
import Timeweaver from './w-engines/timeweaver';
import TremorTrigramVessel from './w-engines/tremor-trigram-vessel';
import TusksOfFury from './w-engines/tusks-of-fury';
import UnfetteredGameBall from './w-engines/unfettered-game-ball';
import VortexArrow from './w-engines/vortex-arrow';
import VortexHatchet from './w-engines/vortex-hatchet';
import VortexRevolver from './w-engines/vortex-revolver';
import WeepingCradle from './w-engines/weeping-cradle';
import WeepingGemini from './w-engines/weeping-gemini';
import ZanshinHerbCase from './w-engines/zanshin-herb-case';

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
    MyriadEclipse,
    OriginalTransmorpher,
    PeacekeeperSpecialized,
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

const wEngines = new WEngines(wEngineList);

export default wEngines;