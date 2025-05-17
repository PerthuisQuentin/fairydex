import { Speciality } from '@/models/speciality';

import { SpecialityData, SpecialityId } from '../speciality.type';

const data: SpecialityData = {
    id: SpecialityId.Attack,
    name: 'Attack',
};

const speciality = new Speciality(data);

export default speciality;