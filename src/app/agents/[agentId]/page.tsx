import Agent from '@/components/pages/agent.page';
import { AgentId } from '@/data/agent.type';

type AgentPageProps = {
    params: Promise<{ agentId: AgentId }>
};

export default async function AgentPage({ params }: AgentPageProps) {
    const { agentId } = await params;

    return <Agent agentId={agentId} />;
}