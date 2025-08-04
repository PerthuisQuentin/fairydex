import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.HormonePunk,
    name: 'Hormone Punk',
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
            target: EffectTarget.Self,
            conditions: [
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.EnteringCombat, CombatAction.SwitchOnField],
                    from: EffectTarget.Self,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.Attack],
                    value: 25,
                    type: EffectModifierType.Percentage,
                    duration: 10,
                    cooldown: 20,
                }
            ]
        },
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;