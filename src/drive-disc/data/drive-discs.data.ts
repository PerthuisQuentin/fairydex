import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';
import { DriveDiscs } from '@/drive-disc/models/drive-discs.model';

import AstralVoice from './raw-data/astral-voice';
import BranchAndBlade from './raw-data/branch-and-blade';
import ChaosJazz from './raw-data/chaos-jazz';
import ChaoticMetal from './raw-data/chaotic-metal';
import FangedMetal from './raw-data/fanged-metal';
import FreedomBlues from './raw-data/freedom-blues';
import HormonePunk from './raw-data/hormone-punk';
import InfernoMetal from './raw-data/inferno-metal';
import KingOfTheSummit from './raw-data/king-of-the-summit';
import PhaethonMelody from './raw-data/phaethon-melody';
import PolarMetal from './raw-data/polar-metal';
import ProtoPunk from './raw-data/proto-punk';
import PufferElectro from './raw-data/puffer-electro';
import ShadowHarmony from './raw-data/shadow-harmony';
import ShockstarDisco from './raw-data/shockstar-disco';
import SoulRock from './raw-data/soul-rock';
import SwingJazz from './raw-data/swing-jazz';
import ThunderMetal from './raw-data/thunder-metal';
import WoodpeckerElectro from './raw-data/woodpecker-electro';
import YunkuiTales from './raw-data/yunkui-tales';

const driveDiscList: DriveDisc[] = [
    AstralVoice,
    BranchAndBlade,
    ChaosJazz,
    ChaoticMetal,
    FangedMetal,
    FreedomBlues,
    HormonePunk,
    InfernoMetal,
    KingOfTheSummit,
    PhaethonMelody,
    PolarMetal,
    ProtoPunk,
    PufferElectro,
    ShadowHarmony,
    ShockstarDisco,
    SoulRock,
    SwingJazz,
    ThunderMetal,
    WoodpeckerElectro,
    YunkuiTales,
];

export const driveDiscs = new DriveDiscs(driveDiscList);

export const getDriveDiscIconUrl = (driveDiscId: DriveDiscId): string => `/drive-disc-icons/${driveDiscId}.png`;