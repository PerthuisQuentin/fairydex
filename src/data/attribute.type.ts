export enum AttributeFamilyId {
    Physical = 'physical',
    Ether = 'ether',
    Fire = 'fire',
    Electric = 'electric',
    Ice = 'ice',
}

export enum AttributeId {
    AuricInk = 'auric-ink',
    Electric = 'electric',
    Ether = 'ether',
    Fire = 'fire',
    Frost = 'frost',
    Ice = 'ice',
    Physical = 'physical',
}

export type AttributeData = {
    id: AttributeId;
    familyId: AttributeFamilyId;
    name: string;
}