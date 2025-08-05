import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.FreedomBlues,
    name: 'Freedom Blues',
    effects2PiecesDescription: 'Increases Anomaly Proficiency by 30',
    effects4PiecesDescription: 'When an EX Special Attack hits an enemy, reduce the target\'s Anomaly Buildup RES to the equipper\'s Attribute by 20% for 8s. This effect does not stack with others of the same attribute.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;