import { Metadata } from 'next';

import Versions from '@/version/pages/versions.page';

const title = 'FairyDex - Version list';
const description = 'Browse all versions in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default Versions;