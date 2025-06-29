import AttributeIcon from '@/components/attribute/attribute-icon.component';
import AgentRankIcon from '@/components/rank/agent-rank-icon.component';
import SpecialityIcon from '@/components/speciality/speciality-icon.component';
import { AgentId } from '@/data/agent.type';
import { agents } from '@/data/agents.data';

import AgentSplashArt from '../agent/agent-splash-art.component';
import FactionIcon from '../faction/faction-icon.component';

type AgentProps = {
    readonly agentId: AgentId
};

export default async function Agent({ agentId }: AgentProps) {
    const agent = agents.getById(agentId)!;

    return (
        <div className="mx-auto max-w-4xl mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
            <div className="flex flex-row gap-2 items-center text-base mb-4">
                <div className='h-8 w-8 relative'>
                    <AgentRankIcon rank={agent.rank} />
                </div>
                <div className='h-8 w-8 relative'>
                    <AttributeIcon attributeId={agent.attributeId} />
                </div>
                <div className='h-8 w-8 relative'>
                    <SpecialityIcon specialityId={agent.specialityId} />
                </div>
                <div className='h-8 w-8 relative'>
                    <FactionIcon factionId={agent.factionId} />
                </div>
            </div>
            <AgentSplashArt agentId={agent.id} />
        </div>
    );
}