export enum AttributeFamilyId {
    Physical = 'physical',
    Ether = 'ether',
    Fire = 'fire',
    Electric = 'electric',
    Ice = 'ice',
}

export enum AttributeId {
    Physical = 'physical',
    Ether = 'ether',
    Fire = 'fire',
    Electric = 'electric',
    Ice = 'ice',
    Frost = 'frost',
}

export type AttributeData = {
    id: AttributeId;
    familyId: AttributeFamilyId;
    name: string;
}