import { DriveDisc } from '@/models/drive-disc';
import { DriveDiscs } from '@/models/drive-discs';

import AstralVoice from './drive-discs/astral-voice';
import BranchAndBlade from './drive-discs/branch-and-blade';
import ChaosJazz from './drive-discs/chaos-jazz';
import ChaoticMetal from './drive-discs/chaotic-metal';
import FangedMetal from './drive-discs/fanged-metal';
import FreedomBlues from './drive-discs/freedom-blues';
import HormonePunk from './drive-discs/hormone-punk';
import InfernoMetal from './drive-discs/inferno-metal';
import PhaethonMelody from './drive-discs/phaethon-melody';
import PolarMetal from './drive-discs/polar-metal';
import ProtoPunk from './drive-discs/proto-punk';
import PufferElectro from './drive-discs/puffer-electro';
import ShadowHarmony from './drive-discs/shadow-harmony';
import ShockstarDisco from './drive-discs/shockstar-disco';
import SoulRock from './drive-discs/soul-rock';
import SwingJazz from './drive-discs/swing-jazz';
import ThunderMetal from './drive-discs/thunder-metal';
import WoodpeckerElectro from './drive-discs/woodpecker-electro';

const driveDiscList: DriveDisc[] = [
    AstralVoice,
    BranchAndBlade,
    ChaosJazz,
    ChaoticMetal,
    FangedMetal,
    FreedomBlues,
    HormonePunk,
    InfernoMetal,
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
];

const driveDiscs = new DriveDiscs(driveDiscList);

export default driveDiscs;