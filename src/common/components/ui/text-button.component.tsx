'use client';
import classNames from 'classnames';
import { ReactNode } from 'react';

type TextButtonProps = {
    readonly className?: string;
    readonly children?: ReactNode;
    selected?: boolean;
    onClick?: () => void;
};

export const TextButton = ({ className, children, selected, onClick }: TextButtonProps) => {
    const buttonClass = classNames(
        'group rounded-full px-[3px] py-[3px] text-z-white text-xl',
        'flex items-center justify-center',
        'border-2 border-z-black bg-gradient-to-br from-white/10 to-z-gray/10',
        'transition-all duration-300 ease-out',
        'cursor-pointer',
        {
            'bg-green-500': !!selected,
            'bg-z-gray-2 hover:bg-green-500': !selected,
        },
        className
    );

    const innerButtonClass = classNames(
        'relative pointer-events-none',
        'rounded-full h-full bg-z-grid',
        'flex items-center justify-center',
    );

    return (
        <button className={buttonClass} onClick={onClick} type="button">
            <span className={innerButtonClass}>
                <span className="px-8 py-1 flex items-center justify-center">
                    {children}
                </span>
            </span>
        </button>
    );
};