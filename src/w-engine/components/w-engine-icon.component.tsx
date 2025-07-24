import classNames from 'classnames';
import Image from 'next/image';

import { WEngineId } from '@/w-engine/data/w-engine.type';
import { getWEngineIconUrl } from '@/w-engine/data/w-engines.data';

type WEngineIconProps = {
    readonly wEngineId: WEngineId;
    readonly className?: string;
};

export default function WEngineIcon({ wEngineId, className }: WEngineIconProps) {
    return (
        <Image
            src={getWEngineIconUrl(wEngineId)}
            width={142}
            height={142}
            alt={`${wEngineId} w-engine icon`}
            className={classNames('rounded flex-shrink-0', className)}
            unoptimized={true}
        />
    );
}