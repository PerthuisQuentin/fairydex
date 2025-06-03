import classNames from 'classnames';
import { ReactNode } from 'react';

type TextButtonProps = {
    readonly className?: string;
    readonly children?: ReactNode;
};

export const TextButton = ({ className, children }: TextButtonProps) => {
    const buttonClass = classNames(
        'group rounded-full h-12 w-30 px-1 text-z-white text-2xl',
        'flex items-center justify-center',
        'border-2 border-z-black bg-z-grey-2 bg-gradient-to-br from-white/10 to-z-grey/10',
        'transition-all duration-300 ease-out hover:bg-green-500',
        className
    );

    const innerButtonClass = classNames(
        'relative pointer-events-none',
        'rounded-full h-9 w-100 bg-z-grid',
        'flex items-center justify-center',
    );

    return (
        <button className={buttonClass}>
            <span className={innerButtonClass}>
                <span className="px-4 h-6 flex items-center justify-center">
                    {children}
                </span>
            </span>
        </button>
    );
};