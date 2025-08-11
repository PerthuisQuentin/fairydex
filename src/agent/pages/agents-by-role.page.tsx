import classNames from 'classnames';
import Link from 'next/link';

import AgentIcon from '@/agent/components/agent-icon.component';
import { AgentId } from '@/agent/data/agent.type';
import { agents } from '@/agent/data/agents.data';
import AttributeIcon from '@/attribute/components/attribute-icon.component';
import { AttributeId } from '@/attribute/data/attribute.type';
import { attributes } from '@/attribute/data/attributes.data';
import DottedCard from '@/common/components/ui/dotted-card.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';
import { SpecialityId } from '@/speciality/data/speciality.type';

const attributeIds = [
    AttributeId.Physical,
    AttributeId.Ether,
    AttributeId.Fire,
    AttributeId.Electric,
    AttributeId.Ice,
];

const specialityIds = [
    SpecialityId.Attack,
    SpecialityId.Anomaly,
    SpecialityId.Rupture,
    SpecialityId.Stun,
    SpecialityId.Support,
    SpecialityId.Defense,
];

export default function AgentsByRolePage() {
    const renderAttributeHeaders = () => (
        attributeIds.map((attributeId) => (
            <DottedCard key={`header-${attributeId}`} containerClass='w-full' contentClass='flex items-center justify-center'>
                <AttributeIcon attributeId={attributeId} />
            </DottedCard>
        ))
    );

    const renderRow = (specialityId: SpecialityId) => [
        <DottedCard key={`header-${specialityId}`} containerClass='h-full' contentClass='flex items-center justify-center'>
            <SpecialityIcon specialityId={specialityId} />
        </DottedCard>,
        ...attributeIds.map((attributeId) => renderCell(specialityId, attributeId)),
    ];

    const renderCell = (specialityId: SpecialityId, attributeId: AttributeId) => {
        const filteredAgents = agents.getAll({
            attributeFamilyIds: [attributes.getById(attributeId)!.familyId],
            specialityIds: [specialityId],
        });

        return (
            <DottedCard key={`cell-${specialityId}-${attributeId}`} contentClass='p-2 flex items-center justify-center'>
                <div className='flex flex-wrap justify-center items-center'>
                    {filteredAgents.map((agent) => renderAgent(agent.id))}
                </div>
            </DottedCard>
        );
    };

    const renderAgent = (agentId: AgentId) => (
        <Link
            key={agentId}
            href={`/agents/${agentId}`}
        >
            <div className={classNames(
                'w-20 h-auto m-2 p-1 bg-z-gray-2 aspect-square rounded',
                'transition-all duration-200 ease-out hover:bg-green-500 cursor-pointer'
            )}>
                <div className='bg-z-black rounded'>
                    <AgentIcon agentId={agentId} />
                </div>
            </div>
        </Link>
    );

    return (
        <div className="w-full px-8">
            <div className="grid grid-cols-[64px_repeat(5,1fr)] gap-4 items-stretch overflow-x-scroll">
                <div></div>
                {renderAttributeHeaders()}
                {specialityIds.map((specialityId) => renderRow(specialityId))}
            </div>
        </div>
    );
}