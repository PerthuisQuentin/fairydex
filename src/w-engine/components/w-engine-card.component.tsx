import Link from 'next/link';

import DottedCard from '@/common/components/ui/dotted-card.component';
import ItemRankIcon from '@/rank/components/item-rank-icon.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';
import WEngineIcon from '@/w-engine/components/w-engine-icon.component';
import { WEngine } from '@/w-engine/models/w-engine.model';

type WEngineCardProps = {
    readonly wEngine: WEngine
};

export default function WEngineCard({ wEngine }: WEngineCardProps) {
    return (
        <Link
            key={wEngine.id}
            href={`/w-engines/${wEngine.id}`}
        >
            <DottedCard selectable={true} containerClass='w-42'>
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
            </DottedCard>
        </Link>
    );
}
