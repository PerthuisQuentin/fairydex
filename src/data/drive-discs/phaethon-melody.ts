import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.PhaethonMelody,
    name: 'Phaethon\'s Melody',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;