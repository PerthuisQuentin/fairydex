import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.YunkuiTales,
    name: 'Yunkui Tales',
    effects2PiecesDescription: '<<health>> <<value:+10%>>',
    effects4PiecesDescription: 'When using <<ex-special-attack>>, <<chain-attack>>, or <<ultimate>>, <<critical-rate>> increases by <<value:4%>>, stacking up to <<value:3>> times and lasting <<value:15s>>. Repeated triggers reset the duration. When having <<value:3>> stacks of this effect, <<sheer-damage>> increases by <<value:10%>>.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;