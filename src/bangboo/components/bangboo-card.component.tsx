import Link from 'next/link';

import BangbooIcon from '@/bangboo/components/bangboo-icon.component';
import { Bangboo } from '@/bangboo/models/bangboo.model';
import DottedCard from '@/common/components/ui/dotted-card.component';
import IconBar, { IconBarHighlight } from '@/common/components/ui/icon-bar.component';
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
            <DottedCard selectable={true} containerClass='w-42 m-2'>
                <div className='w-full aspect-square rounded relative'>
                    <BangbooIcon bangbooId={bangboo.id} />
                </div>
                <IconBar className='mt-2 w-full'>
                    <IconBarHighlight>
                        <BangbooRankIcon rank={bangboo.rank} />
                    </IconBarHighlight>
                </IconBar>
            </DottedCard>
        </Link>
    );
}
