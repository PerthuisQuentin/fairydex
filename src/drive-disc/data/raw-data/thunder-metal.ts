import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ThunderMetal,
    name: 'Thunder Metal',
    effects2PiecesDescription: '<<electric-damage>> <<value:+10%>>',
    effects4PiecesDescription: 'As long as an enemy in combat is <<shocked>>, the equipper\'s <<attack>> is increased by <<value:28%>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;