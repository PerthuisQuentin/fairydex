import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.FangedMetal,
    name: 'Fanged Metal',
    effects2PiecesDescription: 'Increases Physical DMG by 10%',
    effects4PiecesDescription: 'Whenever a squad member inflicts Assault on an enemy, the equipper deals 35% additional DMG to the target for 12s.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;