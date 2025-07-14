import Image from 'next/image';

import { getItemRankIconUrl } from '@/rank/data/rank.data';
import { Rank } from '@/rank/data/rank.type';

type ItemRankIconProps = {
    readonly rank: Rank;
};

export default function ItemRankIcon({ rank }: ItemRankIconProps) {
    return (
        <Image
            src={getItemRankIconUrl(rank)}
            fill={true}
            alt={`Item rank icon for ${rank}`}
        />
    );
}