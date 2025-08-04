import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.ChaoticMetal,
    name: 'Chaotic Metal',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.EtherDamage],
                    value: 10,
                    type: EffectModifierType.Percentage,
                }
            ]
        }
    ],
    effects4Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.CriticalDamage],
                    value: 20,
                    type: EffectModifierType.Percentage,
                }
            ]
        },
        {
            target: EffectTarget.Self,
            conditions: [
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.AttackOnCorruption],
                    from: EffectTarget.AnySquadMember,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.CriticalDamage],
                    value: 5.5,
                    type: EffectModifierType.Percentage,
                    stacks: 6,
                    duration: 8,
                    conditionResetDuration: true,
                }
            ]
        },
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;