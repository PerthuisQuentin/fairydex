import { Metadata } from 'next';

import { AgentId } from '@/agent/data/agent.type';
import { agents, getAgentIconUrl } from '@/agent/data/agents.data';
import Agent from '@/agent/pages/agent.page';
import { attributes } from '@/attribute/data/attributes.data';
import { specialities } from '@/speciality/data/specialities.data';

type AgentPageProps = {
    params: Promise<{ agentId: AgentId }>
};

export async function generateMetadata({ params }: AgentPageProps): Promise<Metadata> {
    const { agentId } = await params;

    const agent = agents.getById(agentId)!;
    const speciality = specialities.getById(agent.specialityId);
    const attribute = attributes.getById(agent.attributeId);

    const title = agent.name;
    const description = `${agent.rank} - ${speciality?.name} - ${attribute?.name}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
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