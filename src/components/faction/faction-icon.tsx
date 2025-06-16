import Image from 'next/image';

import { FactionId } from '@/data/faction.type';

type FactionIconProps = {
    readonly factionId: FactionId;
};

export default function FactionIcon({ factionId }: FactionIconProps) {
    return (
        <Image
            src={`/faction-icons/${factionId}.webp`}
            fill={true}
            alt={`Faction icon for ${factionId}`}
        />
    );
}