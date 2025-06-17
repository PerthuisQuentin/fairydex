import classNames from 'classnames';
import Link from 'next/link';

import AgentRankIcon from '@/components/rank/agent-rank-icon';
import SpecialityIcon from '@/components/speciality/speciality-icon';
import { WEngine } from '@/models/w-engine';

import WEngineIcon from './w-engine-icon';

type WEngineCardProps = {
    readonly wEngine: WEngine
};

export default function WEngineCard({ wEngine }: WEngineCardProps) {
    const cardClass = classNames(
        'rounded-lg w-42 text-z-white m-2 p-[3px]',
        'flex items-center justify-center',
        'border-2 border-z-black bg-z-gray-2 bg-gradient-to-br from-white/10 to-z-gray/10',
        'transition-all duration-200 ease-out hover:bg-green-500',
    );

    return (
        <Link
            key={wEngine.id}
            href={`/w-engines/${wEngine.id}`}
            className={cardClass}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className='rounded w-full h-full bg-z-grid p-2'>
                <div className='w-full aspect-square rounded relative'>
                    <WEngineIcon wEngineId={wEngine.id} />
                </div>
                <div className='mt-2 w-full h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full w-10 p-1 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <div className='h-full aspect-square flex justify-center relative'>
                            <AgentRankIcon rank={wEngine.rank} />
                        </div>
                    </div>
                    <div className="h-full aspect-square flex justify-center relative">
                        <SpecialityIcon specialityId={wEngine.specialityId} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
