import { AttributeData, AttributeFamilyId, AttributeId } from '@/attribute/data/attribute.type';
import { Attribute } from '@/attribute/models/attribute.model';

const data: AttributeData = {
    id: AttributeId.Electric,
    familyId: AttributeFamilyId.Electric,
    name: 'Electric',
};

const attribute = new Attribute(data);

export default attribute;