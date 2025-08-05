import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ChaoticMetal,
    name: 'Chaotic Metal',
    effects2PiecesDescription: 'Increases Ether DMG by 10%',
    effects4PiecesDescription: 'The equipper\'s CRIT DMG increases by 20%. When any character in the squad triggers Corruption\'s additional DMG, this effect further increases by 5.5% for 8s, stacking up to 6 times. Repeated triggers reset the duration.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;