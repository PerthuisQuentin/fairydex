import Image from 'next/image';

import { FactionId } from '@/faction/data/faction.type';
import { getFactionArtUrl } from '@/faction/data/factions.data';

type FactionIconProps = {
    readonly factionId: FactionId;
    readonly className?: string;
};

export default function FactionArt({ factionId, className }: FactionIconProps) {
    return (
        <Image
            src={getFactionArtUrl(factionId)}
            width={256}
            height={256}
            alt={`${factionId} faction icon`}
            className={className}
            unoptimized={true}
        />
    );
}