import BangbooIcon from '@/bangboo/components/bangboo-icon.component';
import { BangbooId } from '@/bangboo/data/bangboo.type';
import { bangboos } from '@/bangboo/data/bangboos.data';
import BangbooRankIcon from '@/rank/components/bangboo-rank-icon.component';

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