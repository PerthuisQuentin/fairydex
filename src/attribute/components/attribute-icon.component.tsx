import Image from 'next/image';

import { AttributeId } from '@/attribute/data/attribute.type';
import { getAttributeIconUrl } from '@/attribute/data/attributes.data';

type AttributeIconProps = {
    readonly attributeId: AttributeId;
};

export default function AttributeIcon({ attributeId }: AttributeIconProps) {
    return (
        <Image
            fill={true}
            src={getAttributeIconUrl(attributeId)}
            alt={`Attribute icon for ${attributeId}`}
        />
    );
}