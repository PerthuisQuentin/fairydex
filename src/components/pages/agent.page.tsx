import AttributeIcon from '@/components/attribute/attribute-icon';
import AgentRankIcon from '@/components/rank/agent-rank-icon';
import SpecialityIcon from '@/components/speciality/speciality-icon';
import { AgentId } from '@/data/agent.type';
import agents from '@/data/agents.data';

import AgentSplashArt from '../agent/agent-splash-art';
import FactionIcon from '../faction/faction-icon';

type AgentProps = {
    readonly agentId: AgentId
};

export default async function Agent({ agentId }: AgentProps) {
    const agent = agents.getById(agentId)!;

    return (
        <div className="mx-auto max-w-4xl mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
            <div className="flex flex-row gap-2 items-center text-base mb-4">
                <AgentRankIcon rank={agent.rank} />
                <AttributeIcon attributeId={agent.attributeId} />
                <SpecialityIcon specialityId={agent.specialityId} />
                <FactionIcon factionId={agent.factionId} />
            </div>
            <AgentSplashArt agentId={agent.id} />
        </div>
    );
}