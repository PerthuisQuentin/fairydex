import Link from 'next/link';

import { DriveDisc } from '@/models/drive-disc';

import SelectableCard from '../ui/selectable-card';
import DriveDiscIcon from './attribute-icon';

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
