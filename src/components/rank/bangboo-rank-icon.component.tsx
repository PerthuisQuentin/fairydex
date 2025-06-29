import Image from 'next/image';

import { getBangbooRankIconUrl } from '@/data/rank.data';
import { Rank } from '@/data/rank.type';

type BangbooRankIconProps = {
    readonly rank: Rank;
};

export default async function BangbooRankIcon({ rank }: BangbooRankIconProps) {
    return (
        <Image
            src={getBangbooRankIconUrl(rank)}
            fill={true}
            alt={`Bangboo rank icon for ${rank}`}
        />
    );
}