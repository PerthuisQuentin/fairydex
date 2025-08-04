import { CombatAction } from '@/core-rpg/types/combat-action.type';
import { CombatStat } from '@/core-rpg/types/combat-stat.type';
import { EffectConditionType, EffectModifierType, EffectTarget } from '@/core-rpg/types/effect.type';
import { DriveDiscData, DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';
import { SpecialityId } from '@/speciality/data/speciality.type';

const data: DriveDiscData = {
    id: DriveDiscId.KingOfTheSummit,
    name: 'King of the Summit',
    effects2Pieces: [
        {
            target: EffectTarget.Self,
            modifiers: [
                {
                    stats: [CombatStat.Daze],
                    value: 6,
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
                    type: EffectConditionType.AgentSpeciality,
                    specialityId: SpecialityId.Stun
                },
                {
                    type: EffectConditionType.CombatAction,
                    values: [CombatAction.ExSpecialAttack, CombatAction.ChainAttack],
                    from: EffectTarget.Self,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.CriticalDamage],
                    value: 15,
                    type: EffectModifierType.Percentage,
                }
            ]
        },
        {
            target: EffectTarget.Self,
            conditions: [
                {
                    type: EffectConditionType.StatThreshold,
                    stat: CombatStat.CriticalRate,
                    value: 50,
                }
            ],
            modifiers: [
                {
                    stats: [CombatStat.CriticalDamage],
                    value: 15,
                    type: EffectModifierType.Percentage,
                    duration: 15,
                    conditionResetDuration: true,
                }
            ]
        },
    ],
};

const driveDisc = new DriveDisc(data);

export default driveDisc;