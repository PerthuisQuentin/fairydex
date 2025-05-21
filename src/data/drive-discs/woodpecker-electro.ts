import { DriveDisc } from '@/models/drive-disc';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.WoodpeckerElectro,
    name: 'Woodpecker Electro',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;