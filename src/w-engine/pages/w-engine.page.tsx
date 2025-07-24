import DottedCard from '@/common/components/ui/dotted-card.component';
import ItemRankIcon from '@/rank/components/item-rank-icon.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';
import WEngineIcon from '@/w-engine/components/w-engine-icon.component';
import { WEngineId } from '@/w-engine/data/w-engine.type';
import { wEngines } from '@/w-engine/data/w-engines.data';

type WEngineProps = {
    readonly wEngineId: WEngineId
};

export default function WEngine({ wEngineId }: WEngineProps) {
    const wEngine = wEngines.getById(wEngineId)!;

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass='w-full sm:w-[500px] md:w-[700px]' contentClass='flex flex-col items-center'>
                <h1 className="text-3xl font-bold mb-2">{wEngine.name}</h1>
                <div className='mb-2 w-[128px] h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full w-10 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <ItemRankIcon rank={wEngine.rank} />
                    </div>
                    <SpecialityIcon specialityId={wEngine.specialityId} />
                </div>
                <WEngineIcon wEngineId={wEngine.id} className='py-2' />
            </DottedCard>
        </div>
    );
}