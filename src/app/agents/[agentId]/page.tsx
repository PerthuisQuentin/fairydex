import { Metadata } from 'next';

import { AgentId } from '@/agent/data/agent.type';
import { agents, getAgentIconUrl } from '@/agent/data/agents.data';
import Agent from '@/agent/pages/agent.page';

type AgentPageProps = {
    params: Promise<{ agentId: AgentId }>
};

export async function generateMetadata({ params }: AgentPageProps): Promise<Metadata> {
    const { agentId } = await params;
    const agent = agents.getById(agentId)!;

    return {
        openGraph: {
            title: agent.name,
            url: `/agents/${agentId}`,
            images: [
                {
                    url: getAgentIconUrl(agentId),
                    width: 128,
                    height: 128,
                },
            ],
        }
    };
}

export default async function AgentPage({ params }: AgentPageProps) {
    const { agentId } = await params;

    return <Agent agentId={agentId} />;
}