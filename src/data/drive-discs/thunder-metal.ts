import { DriveDisc } from '@/models/drive-disc/drive-disc.model';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.ThunderMetal,
    name: 'Thunder Metal',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;