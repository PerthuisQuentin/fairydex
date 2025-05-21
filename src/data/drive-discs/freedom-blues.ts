import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.FreedomBlues,
    name: 'Freedom Blues',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;