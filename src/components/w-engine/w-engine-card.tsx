import Link from 'next/link';

import SpecialityIcon from '@/components/speciality/speciality-icon';
import { WEngine } from '@/models/w-engine';

import ItemRankIcon from '../rank/item-rank-icon';
import SelectableCard from '../ui/selectable-card';
import WEngineIcon from './w-engine-icon';

type WEngineCardProps = {
    readonly wEngine: WEngine
};

export default function WEngineCard({ wEngine }: WEngineCardProps) {
    return (
        <Link
            key={wEngine.id}
            href={`/w-engines/${wEngine.id}`}
        >
            <SelectableCard className='w-42'>
                <div className='w-full aspect-square rounded relative'>
                    <WEngineIcon wEngineId={wEngine.id} />
                </div>
                <div className='mt-2 w-full h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full w-10 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <div className='h-full aspect-square flex justify-center relative'>
                            <ItemRankIcon rank={wEngine.rank} />
                        </div>
                    </div>
                    <div className="h-full aspect-square flex justify-center relative">
                        <SpecialityIcon specialityId={wEngine.specialityId} />
                    </div>
                </div>
            </SelectableCard>
        </Link>
    );
}
