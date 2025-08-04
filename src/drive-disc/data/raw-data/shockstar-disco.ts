import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ShockstarDisco,
    name: 'Shockstar Disco',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.Impact],
                    value: 6,
                    type: EffectModifierType.Percentage,
                }
            ]
        }
    ],
    effects4Pieces: [],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;