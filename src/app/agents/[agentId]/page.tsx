import { Metadata } from 'next';

import Agent from '@/components/pages/agent.page';
import { AgentId } from '@/data/agent.type';
import { agents, getAgentIconUrl } from '@/data/agents.data';

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