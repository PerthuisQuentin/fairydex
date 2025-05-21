import Image from 'next/image';

import { AgentId } from '@/data/agent.type';

type AgentIconProps = {
    readonly agentId: AgentId;
};

export default async function AgentIcon({ agentId }: AgentIconProps) {
    return (
        <Image
            src={`/agent-icons/${agentId}.webp`}
            height={100}
            width={100}
            alt={`Agent icon for ${agentId}`}
            className="rounded flex-shrink-0"
        />
    );
}