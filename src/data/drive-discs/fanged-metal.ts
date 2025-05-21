import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.FangedMetal,
    name: 'Fanged Metal',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;