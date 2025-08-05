import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.BranchAndBlade,
    name: 'Branch and Blade',
    effects2PiecesDescription: 'CRIT DMG +16%',
    effects4PiecesDescription: 'When Anomaly Mastery exceeds or equals 115 points, the equipper\'s CRIT DMG increases by 30%. When any squad member applies Freeze or triggers the Shatter effect on an enemy, the equipper\'s CRIT Rate increases by 12%, lasting 15s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;