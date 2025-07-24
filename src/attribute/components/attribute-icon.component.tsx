import Image from 'next/image';

import { AttributeId } from '@/attribute/data/attribute.type';
import { getAttributeIconUrl } from '@/attribute/data/attributes.data';

type AttributeIconProps = {
    readonly attributeId: AttributeId;
    readonly className?: string;
};

export default function AttributeIcon({ attributeId, className }: AttributeIconProps) {
    return (
        <Image
            src={getAttributeIconUrl(attributeId)}
            width={32}
            height={32}
            alt={`${attributeId} attribute icon`}
            className={className}
            unoptimized={true}
        />
    );
}