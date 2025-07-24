import Image from 'next/image';

import { getItemRankIconUrl } from '@/rank/data/rank.data';
import { Rank } from '@/rank/data/rank.type';

type ItemRankIconProps = {
    readonly rank: Rank;
    readonly className?: string;
};

export default function ItemRankIcon({ rank, className }: ItemRankIconProps) {
    return (
        <Image
            src={getItemRankIconUrl(rank)}
            width={32}
            height={32}
            alt={`${rank} rank item icon`}
            className={className}
            unoptimized={true}
        />
    );
}