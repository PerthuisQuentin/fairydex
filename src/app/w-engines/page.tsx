import { Metadata } from 'next';

import { WEngineId } from '@/w-engine/data/w-engine.type';
import { getWEngineIconUrl } from '@/w-engine/data/w-engines.data';
import WEngines from '@/w-engine/pages/w-engines.page';

const title = 'Zenless Lab - W-Engine list';
const description = 'Browse all w-engines in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: getWEngineIconUrl(WEngineId.DemaraBatteryMarkII),
                width: 128,
                height: 128,
            },
        ],
    }
};

export default WEngines;