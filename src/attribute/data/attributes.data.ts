import { AttributeId } from '@/attribute/data/attribute.type';
import { Attribute } from '@/attribute/models/attribute.model';
import { Attributes } from '@/attribute/models/attributes.model';

import AuricInk from './raw-data/auric-ink';
import Electric from './raw-data/electric';
import Ether from './raw-data/ether';
import Fire from './raw-data/fire';
import Frost from './raw-data/frost';
import Ice from './raw-data/ice';
import Physical from './raw-data/physical';

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

export const getAttributeIconUrl = (attributeId: AttributeId): string => `/attribute-icons/64x64/${attributeId}.webp`;