import { Specialities } from '@/models/specialities';
import { Speciality } from '@/models/speciality';

import Anomaly from './specialities/anomaly';
import Attack from './specialities/attack';
import Defense from './specialities/defense';
import Stun from './specialities/stun';
import Support from './specialities/support';

const specialityList: Speciality[] = [
    Anomaly,
    Attack,
    Defense,
    Stun,
    Support,
];


const specialities = new Specialities(specialityList);

export default specialities;