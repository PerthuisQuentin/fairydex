import { Specialities } from '@/models/speciality/specialities.model';
import { Speciality } from '@/models/speciality/speciality.model';

import Anomaly from './specialities/anomaly';
import Attack from './specialities/attack';
import Defense from './specialities/defense';
import Rupture from './specialities/rupture';
import Stun from './specialities/stun';
import Support from './specialities/support';
import { SpecialityId } from './speciality.type';

const specialityList: Speciality[] = [
    Anomaly,
    Attack,
    Defense,
    Rupture,
    Stun,
    Support,
];


export const specialities = new Specialities(specialityList);

export const getSpecialityIconUrl = (specialityId: SpecialityId): string => `/speciality-icons/${specialityId}.webp`;