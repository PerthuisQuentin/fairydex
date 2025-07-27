import AgentSplashArt from '@/agent/components/agent-splash-art.component';
import { AgentId } from '@/agent/data/agent.type';
import { agents } from '@/agent/data/agents.data';
import AttributeIcon from '@/attribute/components/attribute-icon.component';
import DottedCard from '@/common/components/ui/dotted-card.component';
import IconBar, { IconBarHighlight } from '@/common/components/ui/icon-bar.component';
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
            <DottedCard containerClass='w-full sm:w-[500px] md:w-[700px]' contentClass='flex flex-col items-center px-4'>
                <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
                <IconBar className='mb-2 w-[210px]'>
                    <IconBarHighlight>
                        <AgentRankIcon rank={agent.rank} />
                    </IconBarHighlight>
                    <SpecialityIcon specialityId={agent.specialityId} />
                    <AttributeIcon attributeId={agent.attributeId} />
                    <FactionIcon factionId={agent.factionId} />
                </IconBar>
                <AgentSplashArt agentId={agent.id} />
            </DottedCard>
        </div>
    );
}