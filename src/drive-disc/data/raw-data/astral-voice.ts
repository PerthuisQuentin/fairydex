import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.AstralVoice,
    name: 'Astral Voice',
    effects2PiecesDescription: 'ATK +10%',
    effects4PiecesDescription: 'Whenever any squad member enters the field using a Quick Assist, all squad members gain 1 stack of Astral, up to a maximum of 3 stacks, and lasting 15s. Repeated triggers reset the duration. Each stack of Astral increases the DMG dealt by the character entering the field using a Quick Assist by 8%. Only one instance of this effect can exist in the same squad.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;