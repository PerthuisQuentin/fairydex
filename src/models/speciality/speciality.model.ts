import { SpecialityData, SpecialityId } from '@/data/speciality.type';

export class Speciality {
    public readonly id: SpecialityId;
    public readonly name: string;

    constructor(attributeData: SpecialityData) {
        this.id = attributeData.id;
        this.name = attributeData.name;
    }
}