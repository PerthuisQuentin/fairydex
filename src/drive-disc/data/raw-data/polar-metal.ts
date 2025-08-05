import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PolarMetal,
    name: 'Polar Metal',
    effects2PiecesDescription: 'Increases Ice DMG by 10%',
    effects4PiecesDescription: 'Increase the DMG of Basic Attack and Dash Attack by 20%. When any squad member inflicts Freeze or Shatter, this effect increases by an additional 20% for 12s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;