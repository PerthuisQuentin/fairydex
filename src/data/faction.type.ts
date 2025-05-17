export enum FactionId {
    BelobogHeavyIndustries = 'belobog-heavy-industries',
    CriminalInvestigationSpecialResponseTeam = 'criminal-investigation-special-response-team',
    CunningHares = 'cunning-hares',
    DefenseForceSilverSquad = 'defense-force-silver-squad',
    Mockingbird = 'mockingbird',
    ObolSquad = 'obol-squad',
    Section6 = 'section-6',
    SonsOfCalydon = 'sons-of-calydon',
    StarsOfLyra = 'stars-of-lyra',
    VictoriaHousekeeping = 'victoria-housekeeping',
    YunkuiSummit = 'yunkui-summit',
}

export type FactionData = {
    id: FactionId;
    name: string;
}