import { Attribute } from '@/models/attribute';

import Electric from './attributes/electric';
import Ether from './attributes/ether';
import Fire from './attributes/fire';
import Frost from './attributes/frost';
import Ice from './attributes/ice';
import Physical from './attributes/physical';

const attributes: Attribute[] = [
    Electric,
    Ether,
    Fire,
    Frost,
    Ice,
    Physical,
];

export default attributes;