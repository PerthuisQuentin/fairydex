import Image from 'next/image';

import { Rank } from '@/data/rank.type';

type AgentRankIconProps = {
    readonly rank: Rank;
};

export default async function AgentRankIcon({ rank }: AgentRankIconProps) {
    return (
        <Image
            src={`/rank-icons/agent-rank-${rank.toLowerCase()}.webp`}
            height={32}
            width={32}
            alt={`Agent rank icon for ${rank}`}
        />
    );
}