import Image from 'next/image';

import { WEngineId } from '@/w-engine/data/w-engine.type';
import { getWEngineIconUrl } from '@/w-engine/data/w-engines.data';

type WEngineIconProps = {
    readonly wEngineId: WEngineId;
};

export default function WEngineIcon({ wEngineId }: WEngineIconProps) {
    return (
        <Image
            src={getWEngineIconUrl(wEngineId)}
            fill={true}
            alt={`W-Engine icon for ${wEngineId}`}
            className="rounded flex-shrink-0"
        />
    );
}