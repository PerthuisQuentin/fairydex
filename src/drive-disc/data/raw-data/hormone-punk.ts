import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.HormonePunk,
    name: 'Hormone Punk',
    effects2PiecesDescription: '<<attack>> <<value:+10%>>',
    effects4PiecesDescription: 'Upon entering combat or switching in, its user\'s <<attack>> increases by <<value:+25%>> for <<value:10s>>. This effect can trigger once every <<value:20s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;