import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.WoodpeckerElectro,
    name: 'Woodpecker Electro',
    effects2PiecesDescription: '<<critical-rate>> <<value:+8%>>',
    effects4PiecesDescription: 'Landing a critical hit on an enemy with a <<basic-attack>>, <<dodge-counter>>, or <<ex-special-attack>> increases the equipper\'s <<attack>> by <<value:9%>> for <<value:6s>>. The buff duration for different skills are calculated separately.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;