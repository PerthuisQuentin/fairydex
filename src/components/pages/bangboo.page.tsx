import { BangbooId } from '@/data/bangboo.type';
import { bangboos } from '@/data/bangboos.data';

import BangbooIcon from '../bangboo/bangboo-icon';
import BangbooRankIcon from '../rank/bangboo-rank-icon';

type BangbooProps = {
    readonly bangbooId: BangbooId
};

export default async function Bangboo({ bangbooId }: BangbooProps) {
    const bangboo = bangboos.getById(bangbooId)!;

    return (
        <div className="mx-auto max-w-4xl mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-2">{bangboo.name}</h1>
            <div className="flex flex-row gap-2 items-center text-base mb-4">
                <div className='h-8 w-8 relative'>
                    <BangbooRankIcon rank={bangboo.rank} />
                </div>
            </div>
            <div className='h-32 w-32 relative'>
                <BangbooIcon bangbooId={bangboo.id} />
            </div>
        </div>
    );
}