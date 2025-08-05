import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ShockstarDisco,
    name: 'Shockstar Disco',
    effects2PiecesDescription: 'Increases Impact by 6%',
    effects4PiecesDescription: 'Basic Attacks, Dash Attacks, and Dodge Counters inflict 20% more Daze to the main target.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;