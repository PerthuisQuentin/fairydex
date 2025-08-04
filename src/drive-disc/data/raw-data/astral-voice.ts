import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.AstralVoice,
    name: 'Astral Voice',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.Attack],
                    value: 10,
                    type: EffectModifierType.Percentage,
                }
            ]
        }
    ],
    effects4Pieces: [
        {
            target: EffectTarget.AllSquadMembers,
            conditions: [
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.QuickAssist],
                    from: EffectTarget.AnySquadMember
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.Damage],
                    value: 8,
                    type: EffectModifierType.Percentage,
                    stacks: 3,
                    duration: 15,
                    exclusive: true,
                    conditionResetDuration: true,
                }
            ]
        }
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;