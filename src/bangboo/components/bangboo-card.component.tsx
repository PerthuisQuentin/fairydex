import Link from 'next/link';

import BangbooIcon from '@/bangboo/components/bangboo-icon.component';
import { Bangboo } from '@/bangboo/models/bangboo.model';
import DottedCard from '@/common/components/ui/dotted-card.component';
import BangbooRankIcon from '@/rank/components/bangboo-rank-icon.component';

type BangbooCardProps = {
    readonly bangboo: Bangboo
};

export default function BangbooCard({ bangboo }: BangbooCardProps) {
    return (
        <Link
            key={bangboo.id}
            href={`/bangboos/${bangboo.id}`}
        >
            <DottedCard selectable={true} className='w-42'>
                <div className='w-full aspect-square rounded relative'>
                    <BangbooIcon bangbooId={bangboo.id} />
                </div>
                <div className='mt-2 w-full h-10 bg-z-gray border-2 border-z-gray-2 rounded flex flex-row justify-around items-center'>
                    <div className="h-full w-10 p-1 bg-z-gray border-2 border-z-gray-2 rounded flex justify-center scale-125">
                        <div className='h-full aspect-square flex justify-center relative'>
                            <BangbooRankIcon rank={bangboo.rank} />
                        </div>
                    </div>
                </div>
            </DottedCard>
        </Link>
    );
}
