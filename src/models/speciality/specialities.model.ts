import { SpecialityId } from '@/data/speciality.type';

import { Speciality } from './speciality.model';

export class Specialities {
    private readonly specialities: Speciality[];
    private readonly specialitiesById: Map<SpecialityId, Speciality>;

    constructor(specialities: Speciality[]) {
        this.specialities = specialities;

        this.specialitiesById = new Map<SpecialityId, Speciality>();
        specialities.forEach((speciality) => {
            this.specialitiesById.set(speciality.id, speciality);
        });
    }

    getById(id: SpecialityId): Speciality | undefined {
        return this.specialitiesById.get(id);
    }

    getAll(): Speciality[] {
        return this.specialities;
    }
}