import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.KingOfTheSummit,
    name: 'King of the Summit',
    effects2PiecesDescription: 'Increases <<daze>> of attacks by <<value:6%>>',
    effects4PiecesDescription: 'When the equipper is a Stun character and uses an <<ex-special-attack>> or <<chain-attack>>, increases <<critical-damage>> of all squad members by <<value:15%>>, and when the equipper\'s <<critical-rate>> is more than or equal to <<value:50%>>, further increases <<critical-damage>> by <<value:15%>>, lasting <<value:15s>>. Repeated triggers reset the duration. Passive effects of the same name do not stack.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;