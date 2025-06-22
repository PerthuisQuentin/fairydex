import Image from 'next/image';

import { BangbooId } from '@/data/bangboo.type';
import { getBangbooIconUrl } from '@/data/bangboos.data';

type BangbooIconProps = {
    readonly bangbooId: BangbooId;
};

export default async function BangbooIcon({ bangbooId }: BangbooIconProps) {
    return (
        <Image
            src={getBangbooIconUrl(bangbooId)}
            fill={true}
            alt={`Bangboo icon for ${bangbooId}`}
            className="rounded flex-shrink-0"
        />
    );
}