import { SpecialityId } from '@/speciality/data/speciality.type';
import { Specialities } from '@/speciality/models/specialities.model';
import { Speciality } from '@/speciality/models/speciality.model';

import Anomaly from './raw-data/anomaly';
import Attack from './raw-data/attack';
import Defense from './raw-data/defense';
import Rupture from './raw-data/rupture';
import Stun from './raw-data/stun';
import Support from './raw-data/support';

const specialityList: Speciality[] = [
    Anomaly,
    Attack,
    Defense,
    Rupture,
    Stun,
    Support,
];


export const specialities = new Specialities(specialityList);

export const getSpecialityIconUrl = (specialityId: SpecialityId): string => `/speciality-icons/64x64/${specialityId}.webp`;