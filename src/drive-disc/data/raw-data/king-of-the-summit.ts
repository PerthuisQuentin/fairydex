import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.KingOfTheSummit,
    name: 'King of the Summit',
    effects2PiecesDescription: 'Increases Daze of attacks by 6%',
    effects4PiecesDescription: 'When the equipper is a Stun character and uses an EX Special Attack or Chain Attack, increases CRIT DMG of all squad members by 15%, and when the equipper\'s CRIT Rate is more than or equal to 50%, further increases CRIT DMG by 15%, lasting 15s. Repeated triggers reset the duration. Passive effects of the same name do not stack.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;