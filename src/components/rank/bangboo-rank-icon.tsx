import Image from 'next/image';

import { Rank } from '@/data/rank.type';

type BangbooRankIconProps = {
    readonly rank: Rank;
};

export default async function BangbooRankIcon({ rank }: BangbooRankIconProps) {
    return (
        <Image
            src={`/rank-icons/bangboo-rank-${rank.toLowerCase()}.webp`}
            height={32}
            width={32}
            alt={`Bangboo rank icon for ${rank}`}
        />
    );
}