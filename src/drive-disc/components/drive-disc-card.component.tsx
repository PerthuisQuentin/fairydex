import Link from 'next/link';

import SelectableCard from '@/common/components/ui/selectable-card.component';
import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import { DriveDisc } from '@/drive-disc/models/drive-disc.model';

type DriveDiscCardProps = {
    readonly driveDisc: DriveDisc
};

export default function DriveDiscCard({ driveDisc }: DriveDiscCardProps) {
    return (
        <Link
            key={driveDisc.id}
            href={`/drive-discs/${driveDisc.id}`}
        >
            <SelectableCard className='w-42'>
                <div className='w-full aspect-square rounded relative'>
                    <DriveDiscIcon driveDiscId={driveDisc.id} />
                </div>
            </SelectableCard>
        </Link>
    );
}
