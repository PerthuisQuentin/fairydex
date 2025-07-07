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
            <th
                key={`col-header-${attributeId}`}
                className="p-2 w-20 h-16"
            >
                <div
                    className="p-2 flex items-center justify-center w-full h-full bg-z-gray-2 rounded-xl mx-1 border-2 border-z-black"
                >
                    <div className="flex items-center justify-center w-10 h-10 relative">
                        <AttributeIcon attributeId={attributeId} />
                    </div>
                </div>
            </th>
        ))
    );

    const renderSpecialityHeader = (specialityId: SpecialityId) => (
        <th
            key={`row-header-${specialityId}`}
            className="p-2 w-20 h-16 bg-transparent"
            scope="row"
        >
            <div
                className="p-2 flex items-center justify-center w-full h-full bg-z-gray-2 rounded-xl my-1 border-2 border-z-black"
            >
                <div className="flex items-center justify-center w-10 h-10 relative">
                    <SpecialityIcon specialityId={specialityId} />
                </div>
            </div>
        </th>
    );

    const renderCell = (specialityId: SpecialityId, attributeId: AttributeId) => {
        const filteredAgents = agents.getAll({
            attributeFamilyIds: [attributes.getById(attributeId)!.familyId],
            specialityIds: [specialityId],
        });

        return (
            <td
                key={`cell-${specialityId}-${attributeId}`}
                className="p-2 w-20 h-16"
            >
                <div
                    className="p-2 flex flex-wrap justify-center items-center w-full h-full bg-z-gray-2 rounded-xl border-2 border-z-black mx-1 my-1"
                >
                    {filteredAgents.map((agent) => (
                        <DottedCard selectable={true} key={agent.id} className="w-20 min-w-20">
                            <div className="w-full aspect-square rounded relative">
                                <AgentIcon agentId={agent.id} />
                            </div>
                        </DottedCard>
                    ))}
                </div>
            </td>
        );
    };

    return (
        <div className="p-8">
            <table
                className={[
                    'min-w-full rounded-lg overflow-hidden',
                ].join(' ')}
            >
                <thead>
                    <tr>
                        <th
                            className={[
                                'px-4 py-2',
                            ].join(' ')}
                        >
                        </th>
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