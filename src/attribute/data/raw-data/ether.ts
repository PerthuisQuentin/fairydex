import { AttributeData, AttributeFamilyId, AttributeId } from '@/attribute/data/attribute.type';
import { Attribute } from '@/attribute/models/attribute.model';

const data: AttributeData = {
    id: AttributeId.Ether,
    familyId: AttributeFamilyId.Ether,
    name: 'Ether',
};

const attribute = new Attribute(data);

export default attribute;