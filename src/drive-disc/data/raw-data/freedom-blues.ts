import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.FreedomBlues,
    name: 'Freedom Blues',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.AnomalyProficiency],
                    value: 30,
                    type: EffectModifierType.Flat,
                }
            ]
        }
    ],
    effects4Pieces: [
        {
            target: EffectTarget.Self,
            conditions: [
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.ExSpecialAttack],
                    from: EffectTarget.Self,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.AnomalyBuildUpResistance],
                    value: -20,
                    type: EffectModifierType.Percentage,
                    duration: 8,
                }
            ]
        },
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;