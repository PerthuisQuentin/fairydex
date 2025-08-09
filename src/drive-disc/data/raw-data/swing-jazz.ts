import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.SwingJazz,
    name: 'Swing Jazz',
    effects2PiecesDescription: '<<energy-regen>> <<value:+20%>>',
    effects4PiecesDescription: 'Launching a <<chain-attack>> or <<ultimate>> increases all squad members\' <<damage>> by <<value:15%>> for <<value:12s>>. Passive effects of the same name do not stack.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;