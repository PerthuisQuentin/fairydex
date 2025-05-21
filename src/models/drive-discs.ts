import { DriveDiscId } from '@/data/drive-disc.type';

import { DriveDisc } from './drive-disc';

export class DriveDiscs {
    private readonly driveDiscs: DriveDisc[];
    private readonly driveDiscsById: Map<DriveDiscId, DriveDisc>;

    constructor(driveDiscs: DriveDisc[]) {
        this.driveDiscs = driveDiscs;

        this.driveDiscsById = new Map<DriveDiscId, DriveDisc>();
        driveDiscs.forEach((driveDisc) => {
            this.driveDiscsById.set(driveDisc.id, driveDisc);
        });
    }

    getById(id: DriveDiscId): DriveDisc | undefined {
        return this.driveDiscsById.get(id);
    }

    getAll(): DriveDisc[] {
        return this.driveDiscs;
    }
}