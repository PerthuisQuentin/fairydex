import Image from 'next/image';

import { BangbooId } from '@/data/bangboo.type';

type BangbooIconProps = {
    readonly bangbooId: BangbooId;
};

export default async function BangbooIcon({ bangbooId }: BangbooIconProps) {
    return (
        <Image
            src={`/bangboo-icons/${bangbooId}.webp`}
            height={100}
            width={100}
            alt={`Bangboo icon for ${bangbooId}`}
            className="rounded flex-shrink-0"
        />
    );
}