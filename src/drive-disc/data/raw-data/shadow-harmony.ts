import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ShadowHarmony,
    name: 'Shadow Harmony',
    effects2PiecesDescription: '<<aftershock-damage>> and <<dash-attack-damage>> are increased by <<value:15%>>',
    effects4PiecesDescription: 'Upon hitting an enemy with an <<aftershock>> or <<dash-attack>>, if the <<damage>> dealt aligns with the equipper\'s attribute, the equipper gains <<value:1>> stack of a buff effect, at most once per use of a skill. For each stack, the equipper\'s <<attack>> increases by <<value:+%>>, and <<critical-rate>> increases by <<value:4%>>. The effect can stack up to <<value:3>> times and lasts for <<value:15s>>. Repeated triggers reset the duration.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;