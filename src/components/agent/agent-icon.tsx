import Image from 'next/image';

import { AgentId } from '@/data/agent.type';
import { getAgentIconUrl } from '@/data/agents.data';

type AgentIconProps = {
    readonly agentId: AgentId;
};

export default async function AgentIcon({ agentId }: AgentIconProps) {
    return (
        <Image
            src={getAgentIconUrl(agentId)}
            fill={true}
            alt={`Agent icon for ${agentId}`}
            className="rounded flex-shrink-0"
        />
    );
}