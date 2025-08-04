import { Effect } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';

export class DriveDisc {
    public readonly id: DriveDiscId;
    public readonly name: string;
    public readonly effects2Pieces: Effect[];
    public readonly effects4Pieces: Effect[];

    constructor(driveDiscData: DriveDiscData) {
        this.id = driveDiscData.id;
        this.name = driveDiscData.name;
        this.effects2Pieces = driveDiscData.effects2Pieces;
        this.effects4Pieces = driveDiscData.effects4Pieces;
    }
}