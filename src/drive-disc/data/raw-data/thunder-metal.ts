import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ThunderMetal,
    name: 'Thunder Metal',
    effects2PiecesDescription: 'Increases Electric DMG by 10%',
    effects4PiecesDescription: 'As long as an enemy in combat is Shocked, the equipper\'s ATK is increased by 28%.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;