import Image from 'next/image';
import Link from 'next/link';

import agents from '@/data/agents.data';
import attributes from '@/data/attributes.data';
import factions from '@/data/factions.data';
import specialities from '@/data/specialities.data';
import { Agent } from '@/models/agent';

const getAgentCard = (agent: Agent) => {
    const attribute = attributes.getById(agent.attributeId);
    const speciality = specialities.getById(agent.specialityId);
    const faction = factions.getById(agent.factionId);

    return (
        <Link
            key={agent.name}
            href={`/agents/${agent.id}`}
            className="flex items-center p-4 m-4 border border-gray-200 transition-transform duration-150 hover:scale-105 hover:shadow-lg"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Image
                src={`/agent-icons/${agent.id}.webp`}
                height={100}
                width={100}
                alt={`Splash art of ${agent.name}`}
                className="rounded mr-6 flex-shrink-0"
            />
            <div>
                <h2 className="text-xl font-bold">{agent.name}</h2>
                <p>{agent.rank} - {attribute?.name} - {speciality?.name} - {faction?.name}</p>
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