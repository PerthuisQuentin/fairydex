import Link from 'next/link';

import AgentIcon from '@/components/agent/agent-icon';
import AttributeIcon from '@/components/attribute/attribute-icon';
import AgentRankIcon from '@/components/rank/agent-rank-icon';
import SpecialityIcon from '@/components/speciality/speciality-icon';
import { Agent } from '@/models/agent';

import SelectableCard from '../ui/selectable-card';

type AgentCardProps = {
    readonly agent: Agent
};

export default function AgentCard({ agent }: AgentCardProps) {
    return (
        <Link
            key={agent.id}
            href={`/agents/${agent.id}`}
        >
            <SelectableCard className='w-42'>
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
            </SelectableCard>
        </Link>
    );
}
