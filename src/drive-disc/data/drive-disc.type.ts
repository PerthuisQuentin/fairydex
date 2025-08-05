export enum DriveDiscId {
    AstralVoice = 'astral-voice',
    BranchAndBlade = 'branch-and-blade',
    ChaosJazz = 'chaos-jazz',
    ChaoticMetal = 'chaotic-metal',
    FangedMetal = 'fanged-metal',
    FreedomBlues = 'freedom-blues',
    HormonePunk = 'hormone-punk',
    InfernoMetal = 'inferno-metal',
    KingOfTheSummit = 'king-of-the-summit',
    PhaethonMelody = 'phaethon-melody',
    PolarMetal = 'polar-metal',
    ProtoPunk = 'proto-punk',
    PufferElectro = 'puffer-electro',
    ShadowHarmony = 'shadow-harmony',
    ShockstarDisco = 'shockstar-disco',
    SoulRock = 'soul-rock',
    SwingJazz = 'swing-jazz',
    ThunderMetal = 'thunder-metal',
    WoodpeckerElectro = 'woodpecker-electro',
    YunkuiTales = 'yunkui-tales',
}

export type DriveDiscData = {
    id: DriveDiscId;
    name: string;
    effects2PiecesDescription: string;
    effects4PiecesDescription: string;
}
