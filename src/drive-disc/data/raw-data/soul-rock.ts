import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.SoulRock,
    name: 'Soul Rock',
    effects2PiecesDescription: 'Increases DEF by 16%',
    effects4PiecesDescription: 'Upon receiving an enemy attack and losing HP, the equipper takes 40% less DMG for 2.5s. This effect can trigger once every 15s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;