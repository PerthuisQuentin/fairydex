import { SpecialityId } from '@/speciality/data/speciality.type';

import { CombatAction } from './combat-action.type';
import { CombatStat } from './combat-stat.type';

export enum EffectConditionType {
    CombatAction = 'combat-action',
    StatThreshold = 'stat-threshold',
    AgentSpeciality = 'agent-speciality',
}

export enum EffectTarget {
    Self = 'self',
    AnySquadMember = 'any-squad-member',
    AllSquadMembers = 'all-squad-members',
    AnotherSquadMember = 'another-squad-member',
}

export type EffectConditionCombatAction = {
    type: EffectConditionType.CombatAction;
    values: CombatAction[];
    from: EffectTarget;
}

export type EffectConditionStatThreshold = {
    type: EffectConditionType.StatThreshold;
    stat: CombatStat;
    value: number;
}

export type EffectConditionAgentSpeciality = {
    type: EffectConditionType.AgentSpeciality;
    specialityId: SpecialityId;
}

export type EffectCondition =
    | EffectConditionCombatAction
    | EffectConditionStatThreshold
    | EffectConditionAgentSpeciality;

export enum EffectModifierType {
    Flat = 'flat',
    Percentage = 'percentage',
}

export type EffectModifier = {
    stats: CombatStat[];
    value: number;
    type: EffectModifierType;
    duration?: number; // In seconds
    cooldown?: number; // In seconds
    stacks?: number; // Number of times the effect can stack
    exclusive?: boolean; // Can this effect have multiple instances
    conditionResetDuration?: boolean;
};

export type Effect = {
    conditions?: EffectCondition[];
    modifiers: EffectModifier[];
    target: EffectTarget;
};