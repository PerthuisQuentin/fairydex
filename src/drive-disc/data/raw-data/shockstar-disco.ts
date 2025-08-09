import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ShockstarDisco,
    name: 'Shockstar Disco',
    effects2PiecesDescription: '<<impact>> <<value:+6%>>',
    effects4PiecesDescription: '<<basic-attack>>, <<dash-attack>>, and <<dodge-counter>> inflict <<value:20%>> more <<daze>> to the main target.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;