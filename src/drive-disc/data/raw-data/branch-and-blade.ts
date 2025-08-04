import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.BranchAndBlade,
    name: 'Branch and Blade',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.Attack],
                    value: 16,
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
                    type: EffectConditionType.StatThreshold,
                    stat: CombatStat.AnomalyMastery,
                    value: 115,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.CriticalDamage],
                    value: 30,
                    type: EffectModifierType.Percentage,
                }
            ]
        },
        {
            target: EffectTarget.Self,
            conditions: [
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.Freeze, CombatAction.Shatter],
                    from: EffectTarget.AnySquadMember
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.CriticalRate],
                    value: 12,
                    type: EffectModifierType.Percentage,
                    duration: 15,
                }
            ]
        }
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;