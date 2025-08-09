import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.FreedomBlues,
    name: 'Freedom Blues',
    effects2PiecesDescription: '<<anomaly-proficiency>> <<value:+30>>',
    effects4PiecesDescription: 'When a <<ex-special-attack>> hits an enemy, reduce the target\'s <<anomaly-buildup-resistance>> to the equipper\'s Attribute by <<value:20%>> for <<value:8s>>. This effect does not stack with others of the same attribute.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;