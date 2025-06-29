import { DriveDiscId } from '@/data/drive-disc.type';
import { driveDiscs } from '@/data/drive-discs.data';

import DriveDiscIcon from '../drive-disc/drive-disc-icon.component';

type DriveDiscProps = {
    readonly driveDiscId: DriveDiscId
};

export default async function DriveDisc({ driveDiscId }: DriveDiscProps) {
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