import { Metadata } from 'next';

import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { getDriveDiscIconUrl } from '@/drive-disc/data/drive-discs.data';
import DriveDiscs from '@/drive-disc/pages/drive-discs.page';

const title = 'Zenless Lab - Drive Disc list';
const description = 'Browse all drive discs in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: getDriveDiscIconUrl(DriveDiscId.WoodpeckerElectro),
                width: 128,
                height: 128,
            },
        ],
    }
};

export default DriveDiscs;