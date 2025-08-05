import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';

export class DriveDisc {
    public readonly id: DriveDiscId;
    public readonly name: string;
    public readonly effects2PiecesDescription: string;
    public readonly effects4PiecesDescription: string;

    constructor(driveDiscData: DriveDiscData) {
        this.id = driveDiscData.id;
        this.name = driveDiscData.name;
        this.effects2PiecesDescription = driveDiscData.effects2PiecesDescription;
        this.effects4PiecesDescription = driveDiscData.effects4PiecesDescription;
    }
}