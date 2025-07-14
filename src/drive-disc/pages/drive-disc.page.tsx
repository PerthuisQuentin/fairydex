import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { driveDiscs } from '@/drive-disc/data/drive-discs.data';

type DriveDiscProps = {
    readonly driveDiscId: DriveDiscId
};

export default function DriveDisc({ driveDiscId }: DriveDiscProps) {
    const driveDisc = driveDiscs.getById(driveDiscId)!;

    return (
        <div className="mx-auto max-w-4xl mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">{driveDisc.name}</h1>
            <div className='h-24 w-24 relative'>
                <DriveDiscIcon driveDiscId={driveDisc.id} />
            </div>
        </div>
    );
}