import { Attribute } from '@/models/attribute';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.Fire,
    familyId: AttributeFamilyId.Fire,
    name: 'Fire',
};

const attribute = new Attribute(data);

export default attribute;