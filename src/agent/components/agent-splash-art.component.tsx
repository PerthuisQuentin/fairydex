import Image from 'next/image';

import { AgentId } from '@/agent/data/agent.type';
import { getAgentSplashArtUrl } from '@/agent/data/agents.data';

type AgentSplashArtProps = {
    readonly agentId: AgentId;
};

export default function AgentSplashArt({ agentId }: AgentSplashArtProps) {
    return (
        <Image
            src={getAgentSplashArtUrl(agentId)}
            width={1200}
            height={1200}
            alt={`${agentId} splash art`}
            priority={true}
            unoptimized
        />
    );
}