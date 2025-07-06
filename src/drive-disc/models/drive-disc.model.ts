import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';

export class DriveDisc {
    public readonly id: DriveDiscId;
    public readonly name: string;

    constructor(driveDiscData: DriveDiscData) {
        this.id = driveDiscData.id;
        this.name = driveDiscData.name;
    }
}