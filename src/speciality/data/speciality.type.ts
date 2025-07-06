export enum SpecialityId {
    Anomaly = 'anomaly',
    Attack = 'attack',
    Defense = 'defense',
    Rupture = 'rupture',
    Stun = 'stun',
    Support = 'support',
}

export type SpecialityData = {
    id: SpecialityId;
    name: string;
}