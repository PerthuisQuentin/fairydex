import Image from 'next/image';

import { AgentId } from '@/data/agent.type';

type AgentSplashArtProps = {
    readonly agentId: AgentId;
};

export default async function AgentSplashArt({ agentId }: AgentSplashArtProps) {
    return (
        <Image
            src={`/agent-splash-arts/${agentId}.webp`}
            height={500}
            width={500}
            alt={`Splash art of ${agentId}`}
        />
    );
}