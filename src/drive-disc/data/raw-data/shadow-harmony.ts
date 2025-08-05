import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ShadowHarmony,
    name: 'Shadow Harmony',
    effects2PiecesDescription: 'The DMG of Aftershocks and Dash Attacks is increased by 15%',
    effects4PiecesDescription: 'Upon hitting an enemy with an Aftershock or Dash Attack, if the DMG dealt aligns with the equipper\'s attribute, the equipper gains 1 stack of a buff effect, at most once per use of a skill. For each stack, the equipper\'s ATK increases by 4%, and CRIT Rate increases by 4%. The effect can stack up to 3 times and lasts for 15s. Repeated triggers reset the duration.',
};

const driveDisc = new DriveDisc(data);

export default driveDisc;