import DottedCard from '@/common/components/ui/dotted-card.component';
import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { driveDiscs } from '@/drive-disc/data/drive-discs.data';

type DriveDiscProps = {
    readonly driveDiscId: DriveDiscId
};

export default function DriveDisc({ driveDiscId }: DriveDiscProps) {
    const driveDisc = driveDiscs.getById(driveDiscId)!;

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass='w-full sm:w-[500px] md:w-[700px]' contentClass='flex flex-col items-center'>
                <h1 className="text-3xl font-bold mb-2">{driveDisc.name}</h1>
                <div className='h-64 w-64 relative'>
                    <DriveDiscIcon driveDiscId={driveDisc.id} />
                </div>
            </DottedCard>
        </div>
    );
}