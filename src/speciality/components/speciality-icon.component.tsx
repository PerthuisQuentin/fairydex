import Image from 'next/image';

import { getSpecialityIconUrl } from '@/speciality/data/specialities.data';
import { SpecialityId } from '@/speciality/data/speciality.type';

type SpecialityIconProps = {
    readonly specialityId: SpecialityId;
};

export default function SpecialityIcon({ specialityId }: SpecialityIconProps) {
    return (
        <Image
            src={getSpecialityIconUrl(specialityId)}
            fill={true}
            alt={`Speciality icon for ${specialityId}`}
        />
    );
}