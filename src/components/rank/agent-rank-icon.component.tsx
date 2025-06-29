import Image from 'next/image';

import { getAgentRankIconUrl } from '@/data/rank.data';
import { Rank } from '@/data/rank.type';

type AgentRankIconProps = {
    readonly rank: Rank;
};

export default async function AgentRankIcon({ rank }: AgentRankIconProps) {
    return (
        <Image
            src={getAgentRankIconUrl(rank)}
            fill={true}
            alt={`Agent rank icon for ${rank}`}
        />
    );
}