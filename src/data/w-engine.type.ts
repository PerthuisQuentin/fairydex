import { AgentId } from './agent.type';
import { Rank } from './rank.type';
import { SpecialityId } from './speciality.type';
import { VersionId } from './version.type';

export enum WEngineId {
    BashfulDemon = 'bashful-demon',
    BigCylinder = 'big-cylinder',
    BlazingLaurel = 'blazing-laurel',
    BoxCutter = 'box-cutter',
    BunnyBand = 'bunny-band',
    CannonRotor = 'cannon-rotor',
    CinderCobalt = 'cinder-cobalt',
    DeepSeaVisitor = 'deep-sea-visitor',
    DemaraBatteryMarkII = 'demara-battery-mark-ii',
    DrillRigRedAxis = 'drill-rig-red-axis',
    ElectroLipGloss = 'electro-lip-gloss',
    ElegantVanity = 'elegant-vanity',
    FlamemakerShaker = 'flamemaker-shaker',
    FlightOfFancy = 'flight-of-fancy',
    FusionCompiler = 'fusion-compiler',
    GildedBlossom = 'gilded-blossom',
    HailstormShrine = 'hailstorm-shrine',
    HeartstringNocturne = 'heartstring-nocturne',
    HellfireGears = 'hellfire-gears',
    Housekeeper = 'housekeeper',
    IceJadeTeapot = 'ice-jade-teapot',
    IdentityBase = 'identity-base',
    IdentityInflection = 'identity-inflection',
    KaboomTheCannon = 'kaboom-the-cannon',
    LunarDecrescent = 'lunar-decrescent',
    LunarNoviluna = 'lunar-noviluna',
    LunarPleniluna = 'lunar-pleniluna',
    MagneticStormAlpha = 'magnetic-storm-alpha',
    MagneticStormBravo = 'magnetic-storm-bravo',
    MagneticStormCharlie = 'magnetic-storm-charlie',
    MarcatoDesire = 'marcato-desire',
    MyriadEclipse = 'myriad-eclipse',
    OriginalTransmorpher = 'original-transmorpher',
    PeacekeeperSpecialized = 'peacekeeper-specialized',
    PreciousFossilizedCore = 'precious-fossilized-core',
    PuzzleSphere = 'puzzle-sphere',
    QingmingBirdcage = 'qingming-birdcage',
    RadiowaveJourney = 'radiowave-journey',
    RainforestGourmet = 'rainforest-gourmet',
    ReelProjector = 'reel-projector',
    ReverbMarkI = 'reverb-mark-i',
    ReverbMarkII = 'reverb-mark-ii',
    ReverbMarkIII = 'reverb-mark-iii',
    RiotSuppressorMarkVI = 'riot-suppressor-mark-vi',
    RoaringRide = 'roaring-ride',
    SeveredInnocence = 'severed-innocence',
    SharpenedStinger = 'sharpened-stinger',
    SixShooter = 'six-shooter',
    SliceOfTime = 'slice-of-time',
    SpectralGaze = 'spectral-gaze',
    SpringEmbrace = 'spring-embrace',
    StarlightEngine = 'starlight-engine',
    StarlightEngineReplica = 'starlight-engine-replica',
    SteamOven = 'steam-oven',
    SteelCushion = 'steel-cushion',
    StreetSuperstar = 'street-superstar',
    TheBrimstone = 'the-brimstone',
    TheRestrained = 'the-restrained',
    TheVault = 'the-vault',
    Timeweaver = 'timeweaver',
    TremorTrigramVessel = 'tremor-trigram-vessel',
    TusksOfFury = 'tusks-of-fury',
    UnfetteredGameBall = 'unfettered-game-ball',
    VortexArrow = 'vortex-arrow',
    VortexHatchet = 'vortex-hatchet',
    VortexRevolver = 'vortex-revolver',
    WeepingCradle = 'weeping-cradle',
    WeepingGemini = 'weeping-gemini',
    ZanshinHerbCase = 'zanshin-herb-case',
}

export type WEngineData = {
    id: WEngineId;
    name: string;
    rank: Rank;
    signatureAgentId: AgentId | null;
    isPermanent: boolean;
    firstVersionId: VersionId;
    specialityId: SpecialityId;
}