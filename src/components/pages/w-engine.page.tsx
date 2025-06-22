import SpecialityIcon from '@/components/speciality/speciality-icon';
import { WEngineId } from '@/data/w-engine.type';
import { wEngines } from '@/data/w-engines.data';

import ItemRankIcon from '../rank/item-rank-icon';
import WEngineIcon from '../w-engine/w-engine-icon';

type WEngineProps = {
    readonly wEngineId: WEngineId
};

export default async function WEngine({ wEngineId }: WEngineProps) {
    const wEngine = wEngines.getById(wEngineId)!;

    return (
        <div className="mx-auto max-w-4xl mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-2">{wEngine.name}</h1>
            <div className="flex flex-row gap-2 items-center text-base mb-4">
                <div className='h-8 w-8 relative'>
                    <ItemRankIcon rank={wEngine.rank} />
                </div>
                <div className='h-8 w-8 relative'>
                    <SpecialityIcon specialityId={wEngine.specialityId} />
                </div>
            </div>
            <div className='h-24 w-24 relative'>
                <WEngineIcon wEngineId={wEngine.id} />
            </div>
        </div>
    );
}