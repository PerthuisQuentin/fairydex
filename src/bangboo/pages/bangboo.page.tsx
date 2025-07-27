import BangbooIcon from '@/bangboo/components/bangboo-icon.component';
import { BangbooId } from '@/bangboo/data/bangboo.type';
import { bangboos } from '@/bangboo/data/bangboos.data';
import DottedCard from '@/common/components/ui/dotted-card.component';
import IconBar, { IconBarHighlight } from '@/common/components/ui/icon-bar.component';
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
                <IconBar className='mb-2 w-[128px]'>
                    <IconBarHighlight>
                        <BangbooRankIcon rank={bangboo.rank} />
                    </IconBarHighlight>
                </IconBar>
                <BangbooIcon bangbooId={bangboo.id} className='py-2' />
            </DottedCard>
        </div>
    );
}