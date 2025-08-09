import classNames from 'classnames';
import React from 'react';

export enum BadgeColor {
    Blue = 'blue',
    Sky = 'sky',
    Red = 'red',
    Purple = 'purple',
    Gray = 'gray',
    Yellow = 'yellow',
    Green = 'green',
}

interface BadgeTextProps {
    readonly children: React.ReactNode;
    readonly color?: BadgeColor
    readonly className?: string;
}

const COLOR_MAP: Record<BadgeColor, string> = {
    [BadgeColor.Red]: 'bg-red-100 text-red-700',
    [BadgeColor.Blue]: 'bg-blue-100 text-blue-700',
    [BadgeColor.Sky]: 'bg-sky-100 text-sky-700',
    [BadgeColor.Purple]: 'bg-purple-100 text-purple-700',
    [BadgeColor.Gray]: 'bg-gray-100 text-gray-700',
    [BadgeColor.Yellow]: 'bg-yellow-100 text-yellow-700',
    [BadgeColor.Green]: 'bg-green-100 text-green-700',
};

export default function BadgeText({ children, color = BadgeColor.Blue, className }: BadgeTextProps) {
    return (
        <span
            className={classNames(
                'inline-block rounded px-1 py-0.5 text-xs font-semibold',
                COLOR_MAP[color],
                className
            )}
        >
            {children}
        </span>
    );
}
