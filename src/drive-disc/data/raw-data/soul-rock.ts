import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.SoulRock,
    name: 'Soul Rock',
    effects2PiecesDescription: '<<defense>> <<value:+16%>>',
    effects4PiecesDescription: 'Upon receiving an enemy attack and losing HP, the equipper takes <<value:40%>> less <<damage>> for <<value:2.5s>>. This effect can trigger once every <<value:15s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;