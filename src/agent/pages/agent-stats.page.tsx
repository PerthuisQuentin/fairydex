import classNames from 'classnames';
import Link from 'next/link';

import AttributeIcon from '@/attribute/components/attribute-icon.component';
import { AttributeId } from '@/attribute/data/attribute.type';
import { attributes } from '@/attribute/data/attributes.data';
import DottedCard from '@/common/components/ui/dotted-card.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';
import { SpecialityId } from '@/speciality/data/speciality.type';

import AgentIcon from '../components/agent-icon.component';
import { agents } from '../data/agents.data';

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

export default function AgentStats() {
    const renderAttributeHeaders = () => (
        attributeIds.map((attributeId) => (
            <th key={`col-header-${attributeId}`}>
                <DottedCard containerClass='m-0' contentClass='flex items-center justify-center'>
                    <div className="flex items-center justify-center w-10 h-10 relative">
                        <AttributeIcon attributeId={attributeId} />
                    </div>
                </DottedCard>
            </th>
        ))
    );

    const renderSpecialityHeader = (specialityId: SpecialityId) => (
        <th
            key={`row-header-${specialityId}`}
            scope="row"
        >
            <DottedCard containerClass='m-0' contentClass='min-h-30 flex items-center justify-center '>
                <div className="flex items-center justify-center w-10 h-10 relative">
                    <SpecialityIcon specialityId={specialityId} />
                </div>
            </DottedCard>
        </th>
    );

    const renderCell = (specialityId: SpecialityId, attributeId: AttributeId) => {
        const filteredAgents = agents.getAll({
            attributeFamilyIds: [attributes.getById(attributeId)!.familyId],
            specialityIds: [specialityId],
        });

        return (
            <td key={`cell-${specialityId}-${attributeId}`}>
                <DottedCard containerClass='m-0' contentClass='min-h-30 flex gap-2 items-center justify-center'>
                    {filteredAgents.map((agent) => (
                        <Link
                            key={agent.id}
                            href={`/agents/${agent.id}`}
                        >
                            <div className={classNames(
                                'w-20 min-w-20 p-1 bg-z-gray-2 aspect-square rounded',
                                'transition-all duration-200 ease-out hover:bg-green-500 cursor-pointer'
                            )}>
                                <div className='w-full h-full bg-z-black rounded relative'>
                                    <AgentIcon agentId={agent.id} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </DottedCard>
            </td>
        );
    };

    return (
        <div className="p-8">
            <table className='min-w-full rounded-lg overflow-hidden table-auto'>
                <thead>
                    <tr>
                        <th></th>
                        {renderAttributeHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {specialityIds.map((specialityId) => (
                        <tr key={`row-${specialityId}`}>
                            {renderSpecialityHeader(specialityId)}
                            {attributeIds.map((attributeId) => (
                                renderCell(specialityId, attributeId)
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}