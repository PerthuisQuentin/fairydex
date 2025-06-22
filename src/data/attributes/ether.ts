import { Attribute } from '@/models/attribute/attribute.model';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.Ether,
    familyId: AttributeFamilyId.Ether,
    name: 'Ether',
};

const attribute = new Attribute(data);

export default attribute;