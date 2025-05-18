import { Attribute } from '@/models/attribute';
import { Attributes } from '@/models/attributes';

import Electric from './attributes/electric';
import Ether from './attributes/ether';
import Fire from './attributes/fire';
import Frost from './attributes/frost';
import Ice from './attributes/ice';
import Physical from './attributes/physical';

const attributeList: Attribute[] = [
    Electric,
    Ether,
    Fire,
    Frost,
    Ice,
    Physical,
];

const attributes = new Attributes(attributeList);

export default attributes;