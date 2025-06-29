import Image from 'next/image';

import { getSpecialityIconUrl } from '@/data/specialities.data';
import { SpecialityId } from '@/data/speciality.type';

type SpecialityIconProps = {
    readonly specialityId: SpecialityId;
};

export default async function SpecialityIcon({ specialityId }: SpecialityIconProps) {
    return (
        <Image
            src={getSpecialityIconUrl(specialityId)}
            fill={true}
            alt={`Speciality icon for ${specialityId}`}
        />
    );
}