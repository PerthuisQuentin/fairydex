import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.HormonePunk,
    name: 'Hormone Punk',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;