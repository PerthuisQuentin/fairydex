import Image from 'next/image';

import { DriveDiscId } from '@/data/drive-disc.type';

type DriveDiscIconProps = {
    readonly driveDiscId: DriveDiscId;
};

export default async function DriveDiscIcon({ driveDiscId }: DriveDiscIconProps) {
    return (
        <Image
            src={`/drive-disc-icons/${driveDiscId}.webp`}
            fill={true}
            alt={`Attribute icon for ${driveDiscId}`}
        />
    );
}