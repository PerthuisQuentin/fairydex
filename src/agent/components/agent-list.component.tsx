import AgentCard from '@/agent/components/agent-card.component';
import { agents } from '@/agent/data/agents.data';

export default function AgentList() {
    return (
        <div className="grid justify-center [grid-template-columns:repeat(auto-fit,minmax(180px,max-content))]">
            {agents.getAll().map((agent) => (
                <div className="flex justify-center items-center" key={agent.id}>
                    <AgentCard agent={agent} />
                </div>
            ))}
        </div>
    );
}