import { DriveDisc } from '@/models/drive-disc/drive-disc.model';

import { DriveDiscData, DriveDiscId } from '../drive-disc.type';

const data: DriveDiscData = {
    id: DriveDiscId.ProtoPunk,
    name: 'Proto Punk',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;