import React from 'react';

import { CombatAction } from '@/rpg-core/types/combat-action';
import { CombatStat } from '@/rpg-core/types/combat-stat';

import BadgeText, { BadgeColor } from '@/common/components/ui/badge-text.component';
import { Roboto } from 'next/font/google';
import classNames from 'classnames';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

enum EnrichedPartType {
    Badge = 'badge',
    ColoredText = 'colored-text',
    Br = 'br',
}

const TAG_TO_ENRICHED_PART_TYPE: Record<string, EnrichedPartType> = {
    // Combat Stats - Base Stats
    [CombatStat.Attack]: EnrichedPartType.Badge,
    [CombatStat.Defense]: EnrichedPartType.Badge,
    [CombatStat.Health]: EnrichedPartType.Badge,
    [CombatStat.EnergyRegen]: EnrichedPartType.Badge,
    [CombatStat.CriticalDamage]: EnrichedPartType.Badge,
    [CombatStat.CriticalRate]: EnrichedPartType.Badge,
    [CombatStat.AnomalyMastery]: EnrichedPartType.Badge,
    [CombatStat.AnomalyProficiency]: EnrichedPartType.Badge,
    [CombatStat.Daze]: EnrichedPartType.Badge,
    [CombatStat.Impact]: EnrichedPartType.Badge,
    [CombatStat.PenRatio]: EnrichedPartType.Badge,
    [CombatStat.AnomalyBuildupResistance]: EnrichedPartType.Badge,
    // Combat Stats - Damages
    [CombatStat.Damage]: EnrichedPartType.Badge,
    [CombatStat.Shield]: EnrichedPartType.Badge,
    [CombatStat.FireDamage]: EnrichedPartType.Badge,
    [CombatStat.ElectricDamage]: EnrichedPartType.Badge,
    [CombatStat.EtherDamage]: EnrichedPartType.Badge,
    [CombatStat.IceDamage]: EnrichedPartType.Badge,
    [CombatStat.PhysicalDamage]: EnrichedPartType.Badge,
    [CombatStat.BasicAttackDamage]: EnrichedPartType.Badge,
    [CombatStat.DashAttackDamage]: EnrichedPartType.Badge,
    [CombatStat.CorruptionAdditionalDamage]: EnrichedPartType.Badge,
    [CombatStat.ExSpecialAttackDamage]: EnrichedPartType.Badge,
    [CombatStat.AftershockDamage]: EnrichedPartType.Badge,
    [CombatStat.AssistAttackDamage]: EnrichedPartType.Badge,
    [CombatStat.UltimateDamage]: EnrichedPartType.Badge,
    [CombatStat.SheerDamage]: EnrichedPartType.Badge,
    // Combat Actions
    [CombatAction.BasicAttack]: EnrichedPartType.ColoredText,
    [CombatAction.QuickAssist]: EnrichedPartType.ColoredText,
    [CombatAction.DodgeCounter]: EnrichedPartType.ColoredText,
    [CombatAction.DashAttack]: EnrichedPartType.ColoredText,
    [CombatAction.ExSpecialAttack]: EnrichedPartType.ColoredText,
    [CombatAction.ChainAttack]: EnrichedPartType.ColoredText,
    [CombatAction.DefensiveAssist]: EnrichedPartType.ColoredText,
    [CombatAction.EvasiveAssist]: EnrichedPartType.ColoredText,
    [CombatAction.Aftershock]: EnrichedPartType.ColoredText,
    [CombatAction.Ultimate]: EnrichedPartType.ColoredText,
    [CombatAction.Freeze]: EnrichedPartType.ColoredText,
    [CombatAction.Shatter]: EnrichedPartType.ColoredText,
    [CombatAction.Assault]: EnrichedPartType.ColoredText,
    [CombatAction.Burning]: EnrichedPartType.ColoredText,
    [CombatAction.Shocked]: EnrichedPartType.ColoredText,
    // Others
    value: EnrichedPartType.ColoredText,
    br: EnrichedPartType.Br,
}

const TAG_TO_BADGE_COLOR: Record<string, BadgeColor> = {
    // Combat Stats - Base Stats
    [CombatStat.Attack]: BadgeColor.Red,
    [CombatStat.Defense]: BadgeColor.Gray,
    [CombatStat.Health]: BadgeColor.Green,
    [CombatStat.EnergyRegen]: BadgeColor.Green,
    [CombatStat.CriticalDamage]: BadgeColor.Blue,
    [CombatStat.CriticalRate]: BadgeColor.Blue,
    [CombatStat.AnomalyMastery]: BadgeColor.Purple,
    [CombatStat.AnomalyProficiency]: BadgeColor.Purple,
    [CombatStat.Daze]: BadgeColor.Gray,
    [CombatStat.Impact]: BadgeColor.Gray,
    [CombatStat.PenRatio]: BadgeColor.Gray,
    [CombatStat.AnomalyBuildupResistance]: BadgeColor.Gray,
    // Combat Stats - Damages
    [CombatStat.Damage]: BadgeColor.Red,
    [CombatStat.FireDamage]: BadgeColor.Red,
    [CombatStat.ElectricDamage]: BadgeColor.Blue,
    [CombatStat.PhysicalDamage]: BadgeColor.Yellow,
    [CombatStat.EtherDamage]: BadgeColor.Purple,
    [CombatStat.IceDamage]: BadgeColor.Sky,
    [CombatStat.Shield]: BadgeColor.Blue,
    [CombatStat.CorruptionAdditionalDamage]: BadgeColor.Purple,
    [CombatStat.BasicAttackDamage]: BadgeColor.Gray,
    [CombatStat.DashAttackDamage]: BadgeColor.Gray,
    [CombatStat.AftershockDamage]: BadgeColor.Gray,
    [CombatStat.ExSpecialAttackDamage]: BadgeColor.Gray,
    [CombatStat.AssistAttackDamage]: BadgeColor.Gray,
    [CombatStat.UltimateDamage]: BadgeColor.Gray,
    [CombatStat.SheerDamage]: BadgeColor.Gray,
}

const TAG_TO_CLASS_NAME: Record<string, string> = {
    [CombatAction.BasicAttack]: 'font-extrabold',
    [CombatAction.QuickAssist]: 'font-extrabold',
    [CombatAction.DodgeCounter]: 'font-extrabold',
    [CombatAction.DashAttack]: 'font-extrabold',
    [CombatAction.ExSpecialAttack]: 'font-extrabold',
    [CombatAction.ChainAttack]: 'font-extrabold',
    [CombatAction.DefensiveAssist]: 'font-extrabold',
    [CombatAction.EvasiveAssist]: 'font-extrabold',
    [CombatAction.Aftershock]: 'font-extrabold',
    [CombatAction.Ultimate]: 'font-extrabold',
    [CombatAction.Freeze]: 'text-sky-400',
    [CombatAction.Shatter]: 'text-sky-400',
    [CombatAction.Assault]: 'text-yellow-400',
    [CombatAction.Burning]: 'text-orange-500',
    [CombatAction.Shocked]: 'text-sky-500',
    value: 'text-green-500',
}

const TAG_TO_TEXT: Record<string, string> = {
    // Combat Stats - Base Stats
    [CombatStat.Attack]: 'ATK',
    [CombatStat.Defense]: 'DEF',
    [CombatStat.Health]: 'HP',
    [CombatStat.EnergyRegen]: 'Energy Regen',
    [CombatStat.CriticalDamage]: 'CRIT DMG',
    [CombatStat.CriticalRate]: 'CRIT Rate',
    [CombatStat.AnomalyMastery]: 'Anomaly Mastery',
    [CombatStat.AnomalyProficiency]: 'Anomaly Proficiency',
    [CombatStat.Daze]: 'Daze',
    [CombatStat.Impact]: 'Impact',
    [CombatStat.PenRatio]: 'PEN Ratio',
    [CombatStat.AnomalyBuildupResistance]: 'Anomaly Buildup RES',
    // Combat Stats - Damages
    [CombatStat.Damage]: 'DMG',
    [CombatStat.Shield]: 'Shield',
    [CombatStat.FireDamage]: 'Fire DMG',
    [CombatStat.ElectricDamage]: 'Electric DMG',
    [CombatStat.EtherDamage]: 'Ether DMG',
    [CombatStat.PhysicalDamage]: 'Physical DMG',
    [CombatStat.IceDamage]: 'Ice DMG',
    [CombatStat.CorruptionAdditionalDamage]: 'Corruption\'s Additional DMG',
    [CombatStat.BasicAttackDamage]: 'Basic Attack DMG',
    [CombatStat.DashAttackDamage]: 'Dash Attack DMG',
    [CombatStat.AftershockDamage]: 'Aftershock DMG',
    [CombatStat.ExSpecialAttackDamage]: 'EX Special Attack DMG',
    [CombatStat.AssistAttackDamage]: 'Assist Attack DMG',
    [CombatStat.UltimateDamage]: 'Ultimate DMG',
    [CombatStat.SheerDamage]: 'Sheer DMG',
    // Combat Actions
    [CombatAction.BasicAttack]: 'Basic Attack',
    [CombatAction.QuickAssist]: 'Quick Assist',
    [CombatAction.DodgeCounter]: 'Dodge Counter',
    [CombatAction.DashAttack]: 'Dash Attack',
    [CombatAction.ExSpecialAttack]: 'EX Special Attack',
    [CombatAction.ChainAttack]: 'Chain Attack',
    [CombatAction.DefensiveAssist]: 'Defensive Assist',
    [CombatAction.EvasiveAssist]: 'Evasive Assist',
    [CombatAction.Aftershock]: 'Aftershock',
    [CombatAction.Ultimate]: 'Ultimate',
    [CombatAction.Freeze]: 'Freeze',
    [CombatAction.Shatter]: 'Shatter',
    [CombatAction.Assault]: 'Assault',
    [CombatAction.Burning]: 'Burning',
    [CombatAction.Shocked]: 'Shocked',
    value: '',
    br: '',
}

const renderEnrichedText = (part: EnrichedPart): React.ReactNode => {
    const { tag, value } = part;
    const partType = TAG_TO_ENRICHED_PART_TYPE[tag];

    if (partType === EnrichedPartType.Badge) return (
        <BadgeText color={TAG_TO_BADGE_COLOR[tag]}>{TAG_TO_TEXT[tag]}</BadgeText>
    );

    if (partType === EnrichedPartType.ColoredText) {
        const text = tag === 'value' ? value : TAG_TO_TEXT[tag] ?? value;
        return <span className={TAG_TO_CLASS_NAME[tag]}>{text}</span>
    };

    return <span>{value}</span>;
}

const renderSimpleText = (part: EnrichedPart): string => {
    const { tag, value } = part;
    const partType = TAG_TO_ENRICHED_PART_TYPE[tag];

    return (partType === EnrichedPartType.Badge ? TAG_TO_TEXT[tag] : value) ?? '';
}

const TAG_REGEX = /<<([a-zA-Z0-9_-]+)(?::([^>]+))?>>/g;

type EnrichedPart = {
    tag: string;
    value?: string;
}

const parseEnrichedText = (text: string): EnrichedPart[] => {
    const parts: EnrichedPart[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let partIndex = 0;

    while ((match = TAG_REGEX.exec(text)) !== null) {
        const [fullMatch, tag, value] = match;

        if (match.index > lastIndex) {
            parts.push({ tag: '', value: text.slice(lastIndex, match.index) });
            partIndex++;
        }

        parts.push({ tag, value });

        partIndex++;
        lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < text.length) {
        parts.push({ tag: '', value: text.slice(lastIndex) });
    }

    return parts;
}

export const enrichedTextToReactNode = (text: string): React.ReactNode[] => {
    const enrichedPartsByParagraph: EnrichedPart[][] = [[]];
    const enrichedParts = parseEnrichedText(text);

    enrichedParts.forEach((part) => {
        if (part.tag === EnrichedPartType.Br) {
            enrichedPartsByParagraph.push([]);
        } else {
            enrichedPartsByParagraph[enrichedPartsByParagraph.length - 1].push(part);
        }
    });

    return enrichedPartsByParagraph
        .map((parts, index) => {
            const enrichedText = parts.map((part, index) => {
                const key = `span-${index}`;
                return <React.Fragment key={key}>{renderEnrichedText(part)}</React.Fragment>;
            });

            const key = `paragraph-${index}`;
            return <p
                key={key}
                className={classNames('py-1 text-sm font-medium leading-6', roboto.className)}
            >
                {enrichedText}
            </p>
        });
}

export const enrichedTextToString = (text: string): string => {
    const enrichedParts = parseEnrichedText(text);
    return enrichedParts.map(renderSimpleText).join('');
}