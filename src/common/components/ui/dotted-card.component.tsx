import classNames from 'classnames';

type DottedCardProps = {
    readonly containerClass?: string;
    readonly contentClass?: string;
    readonly children?: React.ReactNode;
    readonly selectable?: boolean;
};

export default function DottedCard({ children, containerClass, contentClass, selectable = false }: DottedCardProps) {
    return (
        <div className={classNames(
            'rounded-lg text-z-white p-[3px]',
            'flex items-center justify-center',
            'border-2 border-z-black bg-z-gray-2 bg-gradient-to-br from-white/10 to-z-gray/10',
            selectable && 'transition-all duration-200 ease-out hover:bg-green-500 cursor-pointer',
            containerClass
        )}>
            <div className={classNames(
                'rounded w-full h-full bg-z-grid p-2',
                contentClass
            )}>
                {children}
            </div>
        </div>
    );
}
