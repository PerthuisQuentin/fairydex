import WEngineCard from '@/w-engine/components/w-engine-card.component';
import { wEngines } from '@/w-engine/data/w-engines.data';

export default function WEngines() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center my-4">W-Engines</h1>
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