import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ChaosJazz,
    name: 'Chaos Jazz',
    effects2PiecesDescription: '<<anomaly-proficiency>> <<value:+30>>',
    effects4PiecesDescription: '<<fire-damage>> and <<electric-damage>> increases by <<value:15%>>.<<br>>While off-field, <<ex-special-attack-damage>> and <<assist-attack-damage>> increases by <<value:20%>>. When switching on-field, this buff continues for <<value:5s>>, and this continuation effect can trigger once every <<value:7.5s>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;