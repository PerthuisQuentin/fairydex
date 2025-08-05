import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.SwingJazz,
    name: 'Swing Jazz',
    effects2PiecesDescription: 'Energy Regen increases by 20%',
    effects4PiecesDescription: 'Launching a Chain Attack or Ultimate increases all squad members\' DMG by 15% for 12s. Passive effects of the same name do not stack.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;