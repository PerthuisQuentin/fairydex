import Image from 'next/image';

import { AttributeId } from '@/data/attribute.type';
import { getAttributeIconUrl } from '@/data/attributes.data';

type AttributeIconProps = {
    readonly attributeId: AttributeId;
};

export default async function AttributeIcon({ attributeId }: AttributeIconProps) {
    return (
        <Image
            fill={true}
            src={getAttributeIconUrl(attributeId)}
            alt={`Attribute icon for ${attributeId}`}
        />
    );
}