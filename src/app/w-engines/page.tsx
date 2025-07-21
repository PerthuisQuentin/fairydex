import { Metadata } from 'next';

import WEngines from '@/w-engine/pages/w-engines.page';

const title = 'Zenless Lab - W-Engine list';
const description = 'Browse all w-engines in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default WEngines;