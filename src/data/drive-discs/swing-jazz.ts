import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.SwingJazz,
    name: 'Swing Jazz',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;