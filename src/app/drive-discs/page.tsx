import { Metadata } from 'next';

import DriveDiscs from '@/drive-disc/pages/drive-discs.page';

const title = 'Zenless Lab - Drive Disc list';
const description = 'Browse all drive discs in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default DriveDiscs;