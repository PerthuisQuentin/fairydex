import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PhaethonMelody,
    name: "Phaethon's Melody",
    effects2PiecesDescription: '<<anomaly-mastery>> <<value:+8%>>',
    effects4PiecesDescription: 'When any squad member uses an <<ex-special-attack>>, the equipper\'s <<anomaly-proficiency>> increases by <<value:45>> for <<value:8s>>. If the character using the <<ex-special-attack>> is not the equipper, the equipper\'s <<ether-damage>> is increased by <<value:25%>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;