import { Speciality } from '@/models/speciality';

import Anomaly from './specialities/anomaly';
import Attack from './specialities/attack';
import Defense from './specialities/defense';
import Stun from './specialities/stun';
import Support from './specialities/support';

const specialities: Speciality[] = [
    Anomaly,
    Attack,
    Defense,
    Stun,
    Support,
];

export default specialities;