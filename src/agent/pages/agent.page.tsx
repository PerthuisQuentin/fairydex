import AgentSplashArt from '@/agent/components/agent-splash-art.component';
import { AgentId } from '@/agent/data/agent.type';
import { agents } from '@/agent/data/agents.data';
import AttributeIcon from '@/attribute/components/attribute-icon.component';
import FactionIcon from '@/faction/components/faction-icon.component';
import AgentRankIcon from '@/rank/components/agent-rank-icon.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';

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