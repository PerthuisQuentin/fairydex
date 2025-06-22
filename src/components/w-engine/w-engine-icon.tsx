import Image from 'next/image';

import { WEngineId } from '@/data/w-engine.type';
import { getWEngineIconUrl } from '@/data/w-engines.data';

type WEngineIconProps = {
    readonly wEngineId: WEngineId;
};

export default async function WEngineIcon({ wEngineId }: WEngineIconProps) {
    return (
        <Image
            src={getWEngineIconUrl(wEngineId)}
            fill={true}
            alt={`W-Engine icon for ${wEngineId}`}
            className="rounded flex-shrink-0"
        />
    );
}