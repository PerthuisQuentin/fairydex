import { FactionData, FactionId } from '@/faction/data/faction.type';

export class Faction {
    public readonly id: FactionId;
    public readonly name: string;

    constructor(factionData: FactionData) {
        this.id = factionData.id;
        this.name = factionData.name;
    }
}