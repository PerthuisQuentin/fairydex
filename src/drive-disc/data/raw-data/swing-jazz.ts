import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.SwingJazz,
    name: 'Swing Jazz',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;