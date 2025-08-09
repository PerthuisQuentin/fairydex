import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ChaoticMetal,
    name: 'Chaotic Metal',
    effects2PiecesDescription: '<<ether-damage>> <<value:+10%>>',
    effects4PiecesDescription: 'The equipper\'s <<critical-damage>> increases by <<value:20%>>. When any character in the squad triggers <<corruption-additional-damage>>, this effect further increases by <<value:5.5%>> for <<value:8s>>, stacking up to <<value:6>> times. Repeated triggers reset the duration.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;