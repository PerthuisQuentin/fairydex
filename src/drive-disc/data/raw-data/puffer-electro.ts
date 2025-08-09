import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PufferElectro,
    name: 'Puffer Electro',
    effects2PiecesDescription: '<<pen-ratio>> <<value:+8%>>',
    effects4PiecesDescription: '<<ultimate-damage>> <<value:+20%>>.<<br>>Launching an <<ultimate>> increases the equipper\'s <<attack>> by <<value:15%>> for <<value:12s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;