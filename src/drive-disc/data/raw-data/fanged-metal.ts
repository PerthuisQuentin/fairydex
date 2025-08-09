import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.FangedMetal,
    name: 'Fanged Metal',
    effects2PiecesDescription: '<<physical-damage>> <<value:+10%>>',
    effects4PiecesDescription: 'Whenever a squad member inflicts <<assault>> on an enemy, the equipper deals <<value:+35%>> additional <<damage>> to the target for <<value:12s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;