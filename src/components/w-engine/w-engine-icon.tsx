import Image from 'next/image';

import { WEngineId } from '@/data/w-engine.type';

type WEngineIconProps = {
    readonly wEngineId: WEngineId;
};

export default async function WEngineIcon({ wEngineId }: WEngineIconProps) {
    return (
        <Image
            src={`/w-engine-icons/${wEngineId}.webp`}
            fill={true}
            alt={`W-Engine icon for ${wEngineId}`}
            className="rounded flex-shrink-0"
        />
    );
}