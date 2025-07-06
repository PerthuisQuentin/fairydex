import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ShadowHarmony,
    name: 'Shadow Harmony',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;