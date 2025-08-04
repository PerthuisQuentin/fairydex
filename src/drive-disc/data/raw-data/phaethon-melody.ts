import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

const data: DriveDiscData = {
    id: DriveDiscId.PhaethonMelody,
    name: 'Phaethon\'s Melody',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.AnomalyMastery],
                    value: 8,
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
                    values: [CombatAction.ExSpecialAttack],
                    from: EffectTarget.AnySquadMember,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.AnomalyProficiency],
                    value: 45,
                    type: EffectModifierType.Percentage,
                    duration: 8,
                }
            ]
        },
        {
            target: EffectTarget.Self,
            conditions: [
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.ExSpecialAttack],
                    from: EffectTarget.AnotherSquadMember,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.EtherDamage],
                    value: 25,
                    type: EffectModifierType.Percentage,
                }
            ]
        },
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;