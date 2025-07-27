import Link from 'next/link';

import DottedCard from '@/common/components/ui/dotted-card.component';
import IconBar, { IconBarHighlight } from '@/common/components/ui/icon-bar.component';
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
            <DottedCard selectable={true} containerClass='w-42 m-2'>
                <div className='w-full aspect-square rounded relative'>
                    <WEngineIcon wEngineId={wEngine.id} />
                </div>
                <IconBar className='mt-2 w-full'>
                    <IconBarHighlight>
                        <ItemRankIcon rank={wEngine.rank} />
                    </IconBarHighlight>
                    <SpecialityIcon specialityId={wEngine.specialityId} />
                </IconBar>
            </DottedCard>
        </Link>
    );
}
