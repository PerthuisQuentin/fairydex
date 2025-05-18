import { FactionId } from '@/data/faction.type';

import { Faction } from './faction';

export class Factions {
    private readonly factions: Faction[];
    private readonly factionsById: Map<FactionId, Faction>;

    constructor(factions: Faction[]) {
        this.factions = factions;

        this.factionsById = new Map<FactionId, Faction>();
        factions.forEach((faction) => {
            this.factionsById.set(faction.id, faction);
        });
    }

    getById(id: FactionId): Faction | undefined {
        return this.factionsById.get(id);
    }

    getAll(): Faction[] {
        return this.factions;
    }
}