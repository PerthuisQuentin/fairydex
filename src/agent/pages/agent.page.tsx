import AgentSplashArt from '@/agent/components/agent-splash-art.component';
import { AgentId } from '@/agent/data/agent.type';
import { agents } from '@/agent/data/agents.data';
import AttributeIcon from '@/attribute/components/attribute-icon.component';
import DottedCard from '@/common/components/ui/dotted-card.component';
import FactionIcon from '@/faction/components/faction-icon.component';
import AgentRankIcon from '@/rank/components/agent-rank-icon.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';

type AgentProps = {
    readonly agentId: AgentId
};

export default function Agent({ agentId }: AgentProps) {
    const agent = agents.getById(agentId)!;

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass='w-full sm:w-[500px] md:w-[700px]' contentClass='flex flex-col items-center'>
                <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
                <div className='mb-2 w-[256px] h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full w-10 p-1 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <div className='h-full aspect-square flex justify-center relative'>
                            <AgentRankIcon rank={agent.rank} />
                        </div>
                    </div>
                    <div className="h-full aspect-square flex justify-center relative">
                        <SpecialityIcon specialityId={agent.specialityId} />
                    </div>
                    <div className="h-full aspect-square flex justify-center relative">
                        <AttributeIcon attributeId={agent.attributeId} />
                    </div>
                    <div className='h-full aspect-square flex justify-center relative'>
                        <FactionIcon factionId={agent.factionId} />
                    </div>
                </div>
                <AgentSplashArt agentId={agent.id} />
            </DottedCard>
        </div>
    );
}