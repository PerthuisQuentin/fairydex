import Image from 'next/image';

import { getSpecialityIconUrl } from '@/speciality/data/specialities.data';
import { SpecialityId } from '@/speciality/data/speciality.type';

type SpecialityIconProps = {
    readonly specialityId: SpecialityId;
    readonly className?: string;
};

export default function SpecialityIcon({ specialityId, className }: SpecialityIconProps) {
    return (
        <Image
            src={getSpecialityIconUrl(specialityId)}
            width={32}
            height={32}
            alt={`${specialityId} speciality icon`}
            className={className}
            unoptimized={true}
        />
    );
}