import { Metadata } from 'next';

import { BangbooId } from '@/bangboo/data/bangboo.type';
import { getBangbooIconUrl } from '@/bangboo/data/bangboos.data';
import Bangboos from '@/bangboo/pages/bangboos.page';

const title = 'Zenless Lab - Bangboo list';
const description = 'Browse all bangboos in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: getBangbooIconUrl(BangbooId.Amillion),
                width: 128,
                height: 128,
            },
        ],
    }
};

export default Bangboos;