import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PhaethonMelody,
    name: 'Phaethon\'s Melody',
    effects2PiecesDescription: 'Anomaly Mastery +8%',
    effects4PiecesDescription: 'When any squad member uses an EX Special Attack, the equipper\'s Anomaly Proficiency increases by 45 for 8s. If the character using the EX Special Attack is not the equipper, the equipper\'s Ether DMG is increased by 25%.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;