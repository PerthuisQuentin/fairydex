import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ProtoPunk,
    name: 'Proto Punk',
    effects2PiecesDescription: 'Increases <<shield>> effect by <<value:15%>>',
    effects4PiecesDescription: 'When any squad member triggers a <<defensive-assist>> or <<evasive-assist>>, all squad members deal <<value:15%>> increased <<damage>>, lasting <<value:10s>>. Passive effects of the same name do not stack.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;