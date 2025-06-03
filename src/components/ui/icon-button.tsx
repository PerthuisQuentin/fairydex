import classNames from 'classnames';
import { ReactNode } from 'react';

type IconButtonProps = {
    readonly className?: string;
    readonly children?: ReactNode;
};

export const IconButton = ({ className, children }: IconButtonProps) => {
    const buttonClass = classNames(
        'group rounded-full w-12 h-12 text-z-white',
        'flex items-center justify-center',
        'border-2 border-z-black bg-z-grey-2 bg-gradient-to-br from-white/10 to-z-grey/10',
        'transition-all duration-200 ease-out hover:bg-green-500',
        className
    );

    const innerButtonClass = classNames(
        'relative pointer-events-none',
        'rounded-full w-9 h-9 bg-z-grid',
        'flex items-center justify-center',
    );

    return (
        <button className={buttonClass}>
            <div className={innerButtonClass}>
                <div className="w-6 h-6 relative z-10">
                    {children}
                </div>
            </div>
        </button>
    );
};