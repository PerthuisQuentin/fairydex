import Link from 'next/link';

import DottedCard from '@/common/components/ui/dotted-card.component';
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
            <DottedCard selectable={true} containerClass='w-42 m-2'>
                <DriveDiscIcon driveDiscId={driveDisc.id} />
            </DottedCard>
        </Link>
    );
}
