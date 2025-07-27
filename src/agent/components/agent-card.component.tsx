import Link from 'next/link';

import AgentIcon from '@/agent/components/agent-icon.component';
import { Agent } from '@/agent/models/agent.model';
import AttributeIcon from '@/attribute/components/attribute-icon.component';
import DottedCard from '@/common/components/ui/dotted-card.component';
import IconBar, { IconBarHighlight } from '@/common/components/ui/icon-bar.component';
import AgentRankIcon from '@/rank/components/agent-rank-icon.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';

type AgentCardProps = {
    readonly agent: Agent
};

export default function AgentCard({ agent }: AgentCardProps) {
    return (
        <Link
            key={agent.id}
            href={`/agents/${agent.id}`}
        >
            <DottedCard selectable={true} containerClass='m-2' contentClass='flex flex-col items-center'>
                <AgentIcon agentId={agent.id} className='w-36 h-auto' />
                <IconBar className='mt-2 w-full'>
                    <SpecialityIcon specialityId={agent.specialityId} />
                    <IconBarHighlight>
                        <AgentRankIcon rank={agent.rank} />
                    </IconBarHighlight>
                    <AttributeIcon attributeId={agent.attributeId} />
                </IconBar>
            </DottedCard>
        </Link>
    );
}
