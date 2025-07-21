import { Metadata } from 'next';

import Bangboos from '@/bangboo/pages/bangboos.page';

const title = 'FairyDex - Bangboo list';
const description = 'Browse all bangboos in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default Bangboos;