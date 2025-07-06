import WEngineCard from '@/w-engine/components/w-engine-card.component';
import { wEngines } from '@/w-engine/data/w-engines.data';

export default function WEngines() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl px-4">
                <div className="grid justify-center [grid-template-columns:repeat(auto-fit,minmax(180px,max-content))]">
                    {wEngines.getAll().map((wEngine) => (
                        <div className="flex justify-center items-center" key={wEngine.id}>
                            <WEngineCard wEngine={wEngine} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}