import Link from 'next/link';

import AgentIcon from '@/components/agent/agent-icon';
import AttributeIcon from '@/components/attribute/attribute-icon';
import RankIcon from '@/components/rank/rank-icon';
import SpecialityIcon from '@/components/speciality/speciality-icon';
import agents from '@/data/agents.data';
import { Agent } from '@/models/agent';

import FactionIcon from '../faction/faction-icon';

const getAgentCard = (agent: Agent) => {
    return (
        <Link
            key={agent.id}
            href={`/agents/${agent.id}`}
            className="flex items-center p-4 m-4 border border-gray-200 transition-transform duration-150 hover:scale-105 hover:shadow-lg"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <AgentIcon agentId={agent.id} />
            <div className='ml-6'>
                <h2 className="text-xl font-bold">{agent.name}</h2>
                <div className="flex flex-row gap-2 items-center text-base">
                    <RankIcon rank={agent.rank} />
                    <AttributeIcon attributeId={agent.attributeId} />
                    <SpecialityIcon specialityId={agent.specialityId} />
                    <FactionIcon factionId={agent.factionId} />
                </div>
            </div>
        </Link>
    );
};

export default function Agents() {
    return (
        <div className="mx-auto max-w-4xl">
            {agents.getAll().map((agent) => getAgentCard(agent))}
        </div>
    );
}