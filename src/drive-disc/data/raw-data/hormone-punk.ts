import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.HormonePunk,
    name: 'Hormone Punk',
    effects2PiecesDescription: 'Increases ATK by 10%',
    effects4PiecesDescription: 'Upon entering combat or switching in, its user\'s ATK increases by 25% for 10s. This effect can trigger once every 20s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;