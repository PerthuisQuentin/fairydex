import { Attribute } from '@/models/attribute';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.Ice,
    familyId: AttributeFamilyId.Ice,
    name: 'Ice',
};

const attribute = new Attribute(data);

export default attribute;