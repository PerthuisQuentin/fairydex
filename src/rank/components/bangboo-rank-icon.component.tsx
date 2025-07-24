import Image from 'next/image';

import { getBangbooRankIconUrl } from '@/rank/data/rank.data';
import { Rank } from '@/rank/data/rank.type';

type BangbooRankIconProps = {
    readonly rank: Rank;
    readonly className?: string;
};

export default function BangbooRankIcon({ rank, className }: BangbooRankIconProps) {
    return (
        <Image
            src={getBangbooRankIconUrl(rank)}
            width={32}
            height={32}
            alt={`${rank} rank bangboo icon`}
            className={className}
            unoptimized={true}
        />
    );
}