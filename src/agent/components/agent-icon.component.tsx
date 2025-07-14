import Image from 'next/image';

import { AgentId } from '@/agent/data/agent.type';
import { getAgentIconUrl } from '@/agent/data/agents.data';

type AgentIconProps = {
    readonly agentId: AgentId;
};

export default function AgentIcon({ agentId }: AgentIconProps) {
    return (
        <Image
            src={getAgentIconUrl(agentId)}
            fill={true}
            alt={`Agent icon for ${agentId}`}
            className="rounded flex-shrink-0"
        />
    );
}