import BangbooIcon from '@/bangboo/components/bangboo-icon.component';
import { BangbooId } from '@/bangboo/data/bangboo.type';
import { bangboos } from '@/bangboo/data/bangboos.data';
import DottedCard from '@/common/components/ui/dotted-card.component';
import BangbooRankIcon from '@/rank/components/bangboo-rank-icon.component';

type BangbooProps = {
    readonly bangbooId: BangbooId
};

export default function Bangboo({ bangbooId }: BangbooProps) {
    const bangboo = bangboos.getById(bangbooId)!;

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass='w-full sm:w-[500px] md:w-[700px]' contentClass='flex flex-col items-center'>
                <h1 className="text-3xl font-bold mb-2">{bangboo.name}</h1>
                <div className='mb-2 w-[128px] h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full w-10 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <div className='h-full aspect-square flex justify-center relative'>
                            <BangbooRankIcon rank={bangboo.rank} />
                        </div>
                    </div>
                </div>
                <div className='w-64 h-64 relative'>
                    <BangbooIcon bangbooId={bangboo.id} />
                </div>
            </DottedCard>
        </div>
    );
}