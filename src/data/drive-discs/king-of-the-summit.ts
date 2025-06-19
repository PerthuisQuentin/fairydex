import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.KingOfTheSummit,
    name: 'King of the Summit',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;