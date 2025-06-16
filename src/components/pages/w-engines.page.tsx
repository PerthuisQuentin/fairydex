import Link from 'next/link';

import ItemRankIcon from '@/components/rank/item-rank-icon';
import SpecialityIcon from '@/components/speciality/speciality-icon';
import wEngines from '@/data/w-engines.data';
import { WEngine } from '@/models/w-engine';

import WEngineIcon from '../w-engine/w-engine-icon';

const getWEngineCard = (wEngine: WEngine) => {
    return (
        <Link
            key={wEngine.id}
            href={`/w-engines/${wEngine.id}`}
            className="flex items-center p-4 m-4 border border-gray-200 transition-transform duration-150 hover:scale-105 hover:shadow-lg"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className='h-24 w-24 relative'>
                <WEngineIcon wEngineId={wEngine.id} />
            </div>
            <div className='ml-6'>
                <h2 className="text-xl font-bold">{wEngine.name}</h2>
                <div className="flex flex-row gap-2 items-center text-base">
                    <div className='h-8 w-8 relative'>
                        <ItemRankIcon rank={wEngine.rank} />
                    </div>
                    <div className='h-8 w-8 relative'>
                        <SpecialityIcon specialityId={wEngine.specialityId} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function WEngines() {
    return (
        <div className="mx-auto max-w-4xl">
            {wEngines.getAll().map((wEngine) => getWEngineCard(wEngine))}
        </div>
    );
}