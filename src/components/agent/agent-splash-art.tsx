import Image from 'next/image';

import { AgentId } from '@/data/agent.type';
import { getAgentSplashArtUrl } from '@/data/agents.data';

type AgentSplashArtProps = {
    readonly agentId: AgentId;
};

export default async function AgentSplashArt({ agentId }: AgentSplashArtProps) {
    return (
        <Image
            src={getAgentSplashArtUrl(agentId)}
            height={500}
            width={500}
            alt={`Splash art of ${agentId}`}
        />
    );
}