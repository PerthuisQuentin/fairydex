import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PolarMetal,
    name: 'Polar Metal',
    effects2PiecesDescription: '<<ice-damage>> <<value:+10%>>',
    effects4PiecesDescription: 'Increase <<basic-attack-damage>> and <<dash-attack-damage>> by <<value:20%>>. When any squad member inflicts <<freeze>> or <<shatter>>, this effect increases by an additional <<value:20%>> for <<value:12s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;