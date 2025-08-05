import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.WoodpeckerElectro,
    name: 'Woodpecker Electro',
    effects2PiecesDescription: 'Increases CRIT Rate by 8%',
    effects4PiecesDescription: 'Landing a critical hit on an enemy with a Basic Attack, Dodge Counter, or EX Special Attack increases the equipper\'s ATK by 9% for 6s. The buff duration for different skills are calculated separately.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;