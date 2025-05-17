export enum SpecialityId {
    Attack = 'attack',
    Defense = 'defense',
    Stun = 'stun',
    Support = 'support',
    Anomaly = 'anomaly',
}

export type SpecialityData = {
    id: SpecialityId;
    name: string;
}