import Image from 'next/image';

import { getAgentRankIconUrl } from '@/rank/data/rank.data';
import { Rank } from '@/rank/data/rank.type';

type AgentRankIconProps = {
    readonly rank: Rank;
};

export default function AgentRankIcon({ rank }: AgentRankIconProps) {
    return (
        <Image
            src={getAgentRankIconUrl(rank)}
            fill={true}
            alt={`Agent rank icon for ${rank}`}
        />
    );
}