import { Attribute } from '@/models/attribute';
import { Attributes } from '@/models/attributes';

import { AttributeId } from './attribute.type';
import AuricInk from './attributes/auric-ink';
import Electric from './attributes/electric';
import Ether from './attributes/ether';
import Fire from './attributes/fire';
import Frost from './attributes/frost';
import Ice from './attributes/ice';
import Physical from './attributes/physical';

const attributeList: Attribute[] = [
    AuricInk,
    Electric,
    Ether,
    Fire,
    Frost,
    Ice,
    Physical,
];

export const attributes = new Attributes(attributeList);

export const getAttributeIconUrl = (attributeId: AttributeId): string => `/attribute-icons/${attributeId}.webp`;