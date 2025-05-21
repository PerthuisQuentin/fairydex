import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.InfernoMetal,
    name: 'Inferno Metal',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;