import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ProtoPunk,
    name: 'Proto Punk',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;