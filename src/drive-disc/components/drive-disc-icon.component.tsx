import classNames from 'classnames';
import Image from 'next/image';

import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { getDriveDiscIconUrl } from '@/drive-disc/data/drive-discs.data';

type DriveDiscIconProps = {
    readonly driveDiscId: DriveDiscId;
    readonly className?: string;
};

export default function DriveDiscIcon({ driveDiscId, className }: DriveDiscIconProps) {
    return (
        <Image
            src={getDriveDiscIconUrl(driveDiscId)}
            width={142}
            height={142}
            alt={`${driveDiscId} drive disc icon`}
            className={classNames('rounded flex-shrink-0', className)}
            unoptimized={true}
        />
    );
}