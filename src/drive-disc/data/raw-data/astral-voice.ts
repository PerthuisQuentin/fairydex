import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.AstralVoice,
    name: 'Astral Voice',
    effects2PiecesDescription: '<<attack>> <<value:+10%>>',
    effects4PiecesDescription: 'Whenever any squad member enters the field using a <<quick-assist>>, all squad members gain <<value:1>> stack of Astral, up to a maximum of <<value:3>> stacks, and lasting <<value:15s>>. Repeated triggers reset the duration.<<br>>Each stack of Astral increases the <<damage>> dealt by the character entering the field using a Quick Assist by <<value:8%>>. Only one instance of this effect can exist in the same squad.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;