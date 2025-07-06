import classNames from 'classnames';

type SelectableCardProps = {
    readonly className?: string;
    readonly children?: React.ReactNode;
};

export default function SelectableCard({ children, className }: SelectableCardProps) {
    const cardClass = classNames(
        'rounded-lg text-z-white m-2 p-[3px]',
        'flex items-center justify-center',
        'border-2 border-z-black bg-z-gray-2 bg-gradient-to-br from-white/10 to-z-gray/10',
        'transition-all duration-200 ease-out hover:bg-green-500',
        className
    );

    return (
        <div className={cardClass}>
            <div className='rounded w-full h-full bg-z-grid p-2'>
                { children }
            </div>
        </div>
    );
}
