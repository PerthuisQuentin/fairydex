import Image from 'next/image';

import { AgentId } from '@/data/agent.type';
import agents from '@/data/agents.data';
import attributes from '@/data/attributes.data';
import factions from '@/data/factions.data';
import specialities from '@/data/specialities.data';

type AgentPageProps = {
    params: Promise<{ agentId: AgentId }>
};

export default async function Agent({ params }: AgentPageProps) {
    const { agentId } = await params;

    const agent = agents.getById(agentId)!;
    const attribute = attributes.getById(agent.attributeId);
    const speciality = specialities.getById(agent.specialityId);
    const faction = factions.getById(agent.factionId);

    return (
        <div className="mx-auto max-w-4xl mt-8">
            <h1 className="text-3xl font-bold">{agent.name}</h1>
            <p className="text-lg">
                {agent.rank} - {attribute?.name} - {speciality?.name} - {faction?.name}
            </p>
            <Image
                src={`/agent-splash-arts/${agent.id}.webp`}
                height={500}
                width={500}
                alt={`Splash art of ${agent.name}`}
            />
        </div>
    );
}