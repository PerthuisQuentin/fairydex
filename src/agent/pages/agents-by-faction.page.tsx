import AgentCard from '@/agent/components/agent-card.component';
import { agents } from '@/agent/data/agents.data';
import FactionArt from '@/faction/components/faction-art.component';
import { FactionId } from '@/faction/data/faction.type';
import { factions } from '@/faction/data/factions.data';

export default function AgentsByFactionPage() {
    const renderFaction = (factionId: FactionId) => {
        return (
            <div key={factionId} className='bg-z-gray-2 rounded p-1'>
                <div className='p-2 bg-z-gray rounded flex flex-col sm:flex-row'>
                    <div className='p-2 mb-2 sm:mb-0 sm:mr-2 flex flex-shrink-0 justify-center items-center bg-z-gray-2 rounded'>
                        <FactionArt factionId={factionId} className='w-[128px] h-[128px]' />
                    </div>
                    <div className='grid justify-center [grid-template-columns:repeat(auto-fit,minmax(180px,max-content))] sm:flex sm:flex-wrap sm:justify-start'>
                        {agents.getAll({ factionIds: [factionId] }).map((agent) => (
                            <AgentCard key={agent.id} agent={agent} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full px-4 lg:max-w-4xl xl:max-w-6xl flex flex-col justify-center gap-8">
            {factions.getAll().map((faction) => renderFaction(faction.id))}
        </div>
    );
}