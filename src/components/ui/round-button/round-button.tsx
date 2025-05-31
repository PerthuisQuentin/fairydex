import { PowerIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { ReactNode } from 'react';

type IconButtonProps = {
    readonly className?: string;
};

type GenericIconButtonProps = IconButtonProps & {
    readonly children?: ReactNode;
};

export const IconButton = ({ className, children }: GenericIconButtonProps) => {
    const buttonClass = classNames(
        'group rounded-full w-12 h-12 text-z-white',
        'flex items-center justify-center',
        'border-2 border-z-black bg-z-grey-2 bg-gradient-to-br from-white/10 to-z-grey/10',
        'transition-all duration-200',
        className
    );

    const innerButtonClass = classNames(
        'relative pointer-events-none',
        'rounded-full w-9 h-9 bg-z-grid',
        'flex items-center justify-center',
    );

    const overlayClass = classNames(
        'absolute pointer-events-none',
        'opacity-0 group-hover:opacity-100',
        'bg-z-green',
        'rounded-full',
        'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        'w-12 h-12'
    );

    return (
        <button className={buttonClass}>
            <div className={innerButtonClass}>
                <div className={overlayClass}/>
                <div className="w-6 h-6 relative z-10 group-hover:text-black">
                    {children}
                </div>
            </div>
        </button>
    );
};


export const PowerButton = ({ className }: IconButtonProps) => <IconButton className={className}><PowerIcon strokeWidth={4} /></IconButton>;