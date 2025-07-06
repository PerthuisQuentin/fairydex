import { WEngineId } from '@/w-engine/data/w-engine.type';

import { WEngine } from './w-engine.model';

export class WEngines {
    private readonly wEngines: WEngine[];
    private readonly wEnginesById: Map<WEngineId, WEngine>;

    constructor(wEngines: WEngine[]) {
        this.wEngines = wEngines;

        this.wEnginesById = new Map<WEngineId, WEngine>();
        wEngines.forEach((wEngine) => {
            this.wEnginesById.set(wEngine.id, wEngine);
        });
    }

    getById(id: WEngineId): WEngine | undefined {
        return this.wEnginesById.get(id);
    }

    getAll(): WEngine[] {
        return this.wEngines;
    }
}