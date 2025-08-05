import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.InfernoMetal,
    name: 'Inferno Metal',
    effects2PiecesDescription: 'Increases Fire DMG by 10%',
    effects4PiecesDescription: 'Upon hitting a Burning enemy, the equipper\'s CRIT Rate is increased by 28% for 8s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;