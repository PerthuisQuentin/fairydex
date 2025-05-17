import { Attribute } from '@/models/attribute';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.Physical,
    familyId: AttributeFamilyId.Physical,
    name: 'Physical',
};

const attribute = new Attribute(data);

export default attribute;