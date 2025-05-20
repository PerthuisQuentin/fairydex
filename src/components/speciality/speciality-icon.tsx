import Image from 'next/image';

import { SpecialityId } from '@/data/speciality.type';

type SpecialityIconProps = {
    readonly specialityId: SpecialityId;
};

export default async function SpecialityIcon({ specialityId }: SpecialityIconProps) {
    return (
        <Image
            src={`/speciality-icons/${specialityId}.webp`}
            height={32}
            width={32}
            alt={`Speciality icon for ${specialityId}`}
        />
    );
}