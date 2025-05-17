import { Attribute } from '@/models/attribute';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.Electric,
    familyId: AttributeFamilyId.Electric,
    name: 'Electric',
};

const attribute = new Attribute(data);

export default attribute;