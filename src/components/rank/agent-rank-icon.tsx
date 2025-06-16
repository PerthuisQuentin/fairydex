import Image from 'next/image';

import { Rank } from '@/data/rank.type';

type AgentRankIconProps = {
    readonly rank: Rank;
};

export default async function AgentRankIcon({ rank }: AgentRankIconProps) {
    return (
        <Image
            src={`/rank-icons/agent-rank-${rank.toLowerCase()}.webp`}
            fill={true}
            alt={`Agent rank icon for ${rank}`}
        />
    );
}