import { BangbooId } from '@/data/bangboo.type';

import { Bangboo } from './bangboo.model';

export class Bangboos {
    private readonly bangboos: Bangboo[];
    private readonly bangboosById: Map<BangbooId, Bangboo>;

    constructor(bangboos: Bangboo[]) {
        this.bangboos = bangboos;

        this.bangboosById = new Map<BangbooId, Bangboo>();
        bangboos.forEach((bangboo) => {
            this.bangboosById.set(bangboo.id, bangboo);
        });
    }

    getById(id: BangbooId): Bangboo | undefined {
        return this.bangboosById.get(id);
    }

    getAll(): Bangboo[] {
        return this.bangboos;
    }
}