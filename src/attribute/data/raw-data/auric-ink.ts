import { AttributeData, AttributeFamilyId, AttributeId } from '@/attribute/data/attribute.type';
import { Attribute } from '@/attribute/models/attribute.model';

const data: AttributeData = {
    id: AttributeId.AuricInk,
    familyId: AttributeFamilyId.Ether,
    name: 'Auric Ink',
};

const attribute = new Attribute(data);

export default attribute;