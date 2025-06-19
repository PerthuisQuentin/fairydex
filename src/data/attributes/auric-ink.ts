import { Attribute } from '@/models/attribute';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.AuricInk,
    familyId: AttributeFamilyId.Ether,
    name: 'Auric Ink',
};

const attribute = new Attribute(data);

export default attribute;