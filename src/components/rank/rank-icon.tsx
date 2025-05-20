import Image from 'next/image';

import { Rank } from '@/data/rank.type';

type RankIconProps = {
    readonly rank: Rank;
};

export default async function RankIcon({ rank }: RankIconProps) {
    return (
        <Image
            src={`/rank-icons/rank-${rank.toLowerCase()}.webp`}
            height={32}
            width={32}
            alt={`Rank icon for ${rank}`}
        />
    );
}