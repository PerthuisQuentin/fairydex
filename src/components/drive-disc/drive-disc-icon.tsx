import Image from 'next/image';

import { DriveDiscId } from '@/data/drive-disc.type';
import { getDriveDiscIconUrl } from '@/data/drive-discs.data';

type DriveDiscIconProps = {
    readonly driveDiscId: DriveDiscId;
};

export default async function DriveDiscIcon({ driveDiscId }: DriveDiscIconProps) {
    return (
        <Image
            src={getDriveDiscIconUrl(driveDiscId)}
            fill={true}
            alt={`Attribute icon for ${driveDiscId}`}
        />
    );
}