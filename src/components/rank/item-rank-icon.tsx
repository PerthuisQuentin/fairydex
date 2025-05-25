import Image from 'next/image';

import { Rank } from '@/data/rank.type';

type ItemRankIconProps = {
    readonly rank: Rank;
};

export default async function ItemRankIcon({ rank }: ItemRankIconProps) {
    return (
        <Image
            src={`/rank-icons/item-rank-${rank.toLowerCase()}.webp`}
            height={32}
            width={32}
            alt={`Item rank icon for ${rank}`}
        />
    );
}