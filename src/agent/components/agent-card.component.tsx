import Link from 'next/link';

import AgentIcon from '@/agent/components/agent-icon.component';
import { Agent } from '@/agent/models/agent.model';
import AttributeIcon from '@/attribute/components/attribute-icon.component';
import DottedCard from '@/common/components/ui/dotted-card.component';
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
            <DottedCard selectable={true} containerClass='w-42 m-2'>
                <div className='w-full aspect-square rounded relative'>
                    <AgentIcon agentId={agent.id} />
                </div>
                <div className='mt-2 w-full h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full aspect-square flex justify-center relative">
                        <SpecialityIcon specialityId={agent.specialityId} />
                    </div>
                    <div className="h-full w-10 p-1 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <div className='h-full aspect-square flex justify-center relative'>
                            <AgentRankIcon rank={agent.rank} />
                        </div>
                    </div>
                    <div className="h-full aspect-square flex justify-center relative">
                        <AttributeIcon attributeId={agent.attributeId} />
                    </div>
                </div>
            </DottedCard>
        </Link>
    );
}
