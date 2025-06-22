import { DriveDisc } from '@/models/drive-disc/drive-disc.model';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.InfernoMetal,
    name: 'Inferno Metal',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;