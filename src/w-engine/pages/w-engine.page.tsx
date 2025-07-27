import DottedCard from '@/common/components/ui/dotted-card.component';
import IconBar, { IconBarHighlight } from '@/common/components/ui/icon-bar.component';
import ItemRankIcon from '@/rank/components/item-rank-icon.component';
import SpecialityIcon from '@/speciality/components/speciality-icon.component';
import WEngineIcon from '@/w-engine/components/w-engine-icon.component';
import { WEngineId } from '@/w-engine/data/w-engine.type';
import { wEngines } from '@/w-engine/data/w-engines.data';

type WEngineProps = {
    readonly wEngineId: WEngineId
};

export default function WEngine({ wEngineId }: WEngineProps) {
    const wEngine = wEngines.getById(wEngineId)!;

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass='w-full sm:w-[500px] md:w-[700px]' contentClass='flex flex-col items-center'>
                <h1 className="text-3xl font-bold mb-2">{wEngine.name}</h1>
                <IconBar className='mb-2 w-[128px]'>
                    <IconBarHighlight>
                        <ItemRankIcon rank={wEngine.rank} />
                    </IconBarHighlight>
                    <SpecialityIcon specialityId={wEngine.specialityId} />
                </IconBar>
                <WEngineIcon wEngineId={wEngine.id} className='py-2' />
            </DottedCard>
        </div>
    );
}