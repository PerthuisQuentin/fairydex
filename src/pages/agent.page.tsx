import Image from 'next/image';

import AttributeIcon from '@/components/attribute/attribute-icon';
import RankIcon from '@/components/rank/rank-icon';
import SpecialityIcon from '@/components/speciality/speciality-icon';
import { AgentId } from '@/data/agent.type';
import agents from '@/data/agents.data';
import factions from '@/data/factions.data';

type AgentPageProps = {
    params: Promise<{ agentId: AgentId }>
};

export default async function Agent({ params }: AgentPageProps) {
    const { agentId } = await params;

    const agent = agents.getById(agentId)!;
    const faction = factions.getById(agent.factionId);

    return (
        <div className="mx-auto max-w-4xl mt-8">
            <h1 className="text-3xl font-bold">{agent.name}</h1>
            <div className="flex flex-row gap-2 items-center text-base">
                <RankIcon rank={agent.rank} />
                <AttributeIcon attributeId={agent.attributeId} />
                <SpecialityIcon specialityId={agent.specialityId} />
                <span>{faction?.name}</span>
            </div>
            <Image
                src={`/agent-splash-arts/${agent.id}.webp`}
                height={500}
                width={500}
                alt={`Splash art of ${agent.name}`}
            />
        </div>
    );
}