import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.InfernoMetal,
    name: 'Inferno Metal',
    effects2PiecesDescription: '<<fire-damage>> <<value:+10%>>',
    effects4PiecesDescription: 'Upon hitting a <<burning>> enemy, the equipper\'s <<critical-rate>> is increased by <<value:28%>> for <<value:8s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;