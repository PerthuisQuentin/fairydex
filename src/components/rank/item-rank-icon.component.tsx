import Image from 'next/image';

import { getItemRankIconUrl } from '@/data/rank.data';
import { Rank } from '@/data/rank.type';

type ItemRankIconProps = {
    readonly rank: Rank;
};

export default async function ItemRankIcon({ rank }: ItemRankIconProps) {
    return (
        <Image
            src={getItemRankIconUrl(rank)}
            fill={true}
            alt={`Item rank icon for ${rank}`}
        />
    );
}