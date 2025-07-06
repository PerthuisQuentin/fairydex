import { SpecialityData, SpecialityId } from '@/speciality/data/speciality.type';
import { Speciality } from '@/speciality/models/speciality.model';

const data: SpecialityData = {
    id: SpecialityId.Attack,
    name: 'Attack',
};

const speciality = new Speciality(data);

export default speciality;