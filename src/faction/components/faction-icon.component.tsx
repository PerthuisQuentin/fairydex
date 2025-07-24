import Image from 'next/image';

import { FactionId } from '@/faction/data/faction.type';
import { getFactionIconUrl } from '@/faction/data/factions.data';

type FactionIconProps = {
    readonly factionId: FactionId;
    readonly className?: string;
};

export default function FactionIcon({ factionId, className }: FactionIconProps) {
    return (
        <Image
            src={getFactionIconUrl(factionId)}
            width={32}
            height={32}
            alt={`${factionId} faction icon`}
            className={className}
            unoptimized={true}
        />
    );
}