import { agents } from '@/data/agents.data';

import AgentCard from '../agent/agent-card';

export default function Agents() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl px-4">
                <div className="grid justify-center [grid-template-columns:repeat(auto-fit,minmax(180px,max-content))]">
                    {agents.getAll().map((agent) => (
                        <div className="flex justify-center items-center" key={agent.id}>
                            <AgentCard agent={agent} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}