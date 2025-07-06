import { AttributeData, AttributeFamilyId, AttributeId } from '@/attribute/data/attribute.type';
import { Attribute } from '@/attribute/models/attribute.model';

const data: AttributeData = {
    id: AttributeId.Physical,
    familyId: AttributeFamilyId.Physical,
    name: 'Physical',
};

const attribute = new Attribute(data);

export default attribute;