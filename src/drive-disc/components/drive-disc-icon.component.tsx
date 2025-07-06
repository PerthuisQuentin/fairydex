import Image from 'next/image';

import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { getDriveDiscIconUrl } from '@/drive-disc/data/drive-discs.data';

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