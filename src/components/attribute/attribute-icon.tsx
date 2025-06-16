import Image from 'next/image';

import { AttributeId } from '@/data/attribute.type';

type AttributeIconProps = {
    readonly attributeId: AttributeId;
};

export default async function AttributeIcon({ attributeId }: AttributeIconProps) {
    return (
        <Image
            src={`/attribute-icons/${attributeId}.webp`}
            fill={true}
            alt={`Attribute icon for ${attributeId}`}
        />
    );
}