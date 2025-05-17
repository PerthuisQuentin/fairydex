import { Speciality } from '@/models/speciality';

import { SpecialityData, SpecialityId } from '../speciality.type';

const data: SpecialityData = {
    id: SpecialityId.Anomaly,
    name: 'Anomaly',
};

const speciality = new Speciality(data);

export default speciality;