import { Metadata } from 'next';

import AboutPage from '@/common/pages/about.page';

const title = 'FairyDex - About';
const description = 'Learn more about FairyDex, a fan-made project for Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default AboutPage;