import agents from '@/data/agents.data';
import attributes from '@/data/attributes.data';
import factions from '@/data/factions.data';
import specialities from '@/data/specialities.data';
import { Agent } from '@/models/agent';

const getAgentCard = (agent: Agent) => {
    const attribute = attributes.getById(agent.attributeId);
    const speciality = specialities.getById(agent.specialityId);
    const faction = factions.getById(agent.factionId);

    return (
        <div key={agent.name} className="p-4 m-4 border border-gray-200">
            <h2 className="text-xl font-bold">{agent.name}</h2>
            <p>{agent.rank} - {attribute?.name} - {speciality?.name} - {faction?.name}</p>
        </div>
    );
};

export default function Agents() {
    return agents.getAll().map((agent) => getAgentCard(agent));
}