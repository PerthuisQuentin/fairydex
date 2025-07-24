import classNames from 'classnames';
import Image from 'next/image';

import { AgentId } from '@/agent/data/agent.type';
import { getAgentIconUrl } from '@/agent/data/agents.data';

type AgentIconProps = {
    readonly agentId: AgentId;
    readonly className?: string;
};

export default function AgentIcon({ agentId, className }: AgentIconProps) {
    return (
        <Image
            src={getAgentIconUrl(agentId)}
            width={142}
            height={142}
            alt={`${agentId} agent icon`}
            className={classNames('rounded flex-shrink-0', className)}
            unoptimized={true}
        />
    );
}