import { AttributeData, AttributeFamilyId, AttributeId } from '@/attribute/data/attribute.type';
import { Attribute } from '@/attribute/models/attribute.model';

const data: AttributeData = {
    id: AttributeId.Fire,
    familyId: AttributeFamilyId.Fire,
    name: 'Fire',
};

const attribute = new Attribute(data);

export default attribute;