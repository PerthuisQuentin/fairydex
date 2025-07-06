import { SpecialityData, SpecialityId } from '@/speciality/data/speciality.type';
import { Speciality } from '@/speciality/models/speciality.model';

const data: SpecialityData = {
    id: SpecialityId.Rupture,
    name: 'Rupture',
};

const speciality = new Speciality(data);

export default speciality;