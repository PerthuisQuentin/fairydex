import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.YunkuiTales,
    name: 'Yunkui Tales',
    effects2PiecesDescription: 'HP +10%',
    effects4PiecesDescription: 'When using EX Special Attack, Chain Attack, or Ultimate, CRIT Rate increases by 4%, stacking up to 3 times and lasting 15s. Repeated triggers reset the duration. When having 3 stacks of this effect, Sheer DMG increases by 10%.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;