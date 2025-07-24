import Image from 'next/image';

import { getAgentRankIconUrl } from '@/rank/data/rank.data';
import { Rank } from '@/rank/data/rank.type';

type AgentRankIconProps = {
    readonly rank: Rank;
    readonly className?: string;
};

export default function AgentRankIcon({ rank, className }: AgentRankIconProps) {
    return (
        <Image
            src={getAgentRankIconUrl(rank)}
            width={32}
            height={32}
            alt={`${rank} rank agent icon`}
            className={className}
            unoptimized={true}
        />
    );
}