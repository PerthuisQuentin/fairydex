import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.ChaoticMetal,
    name: 'Chaotic Metal',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;