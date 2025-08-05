import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ProtoPunk,
    name: 'Proto Punk',
    effects2PiecesDescription: 'Increases Shield effect by 15%',
    effects4PiecesDescription: 'When any squad member triggers a Defensive Assist or Evasive Assist, all squad members deal 15% increased DMG, lasting 10s. Passive effects of the same name do not stack.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;