import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.InfernoMetal,
    name: 'Inferno Metal',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.FireDamage],
                    value: 10,
                    type: EffectModifierType.Percentage,
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
                    values: [CombatAction.AttackOnBurning],
                    from: EffectTarget.Self,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.CriticalRate],
                    value: 28,
                    type: EffectModifierType.Percentage,
                    duration: 8,
                }
            ]
        },
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;