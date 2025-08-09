import DottedCard from '@/common/components/ui/dotted-card.component';
import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import DriveDiscSet from '@/drive-disc/components/drive-disc-set.component';
import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { driveDiscs } from '@/drive-disc/data/drive-discs.data';
import { enrichedTextToReactNode } from '@/rpg-core/utils/enriched-text.utils';

type DriveDiscProps = {
    readonly driveDiscId: DriveDiscId
};

export default function DriveDisc({ driveDiscId }: DriveDiscProps) {
    const driveDisc = driveDiscs.getById(driveDiscId)!;

    const getEffectBlock = (pieceCount: number, description: string) => (
        <div className="w-full rounded bg-z-gray-2 p-3">
            <DriveDiscSet
                filledCount={pieceCount}
                driveDiscId={driveDisc.id}
                className="mb-2"
            />
            {enrichedTextToReactNode(description)}
        </div>
    );

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass="w-full md:w-[700px]" contentClass="p-4 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">{driveDisc.name}</h1>
                <div className="flex flex-col sm:flex-row w-full gap-4 items-center justify-center">
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <DriveDiscIcon driveDiscId={driveDisc.id} className="py-2" />
                    </div>
                    <div className='flex flex-col flex-grow gap-2'>
                        {getEffectBlock(2, driveDisc.effects2PiecesDescription)}
                        {getEffectBlock(4, driveDisc.effects4PiecesDescription)}
                    </div>
                </div>
            </DottedCard>
        </div>
    );
}