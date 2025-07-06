import { AttributeId } from '@/attribute/data/attribute.type';

import { Attribute } from './attribute.model';

export class Attributes {
    private readonly attributes: Attribute[];
    private readonly attributesById: Map<AttributeId, Attribute>;

    constructor(attributes: Attribute[]) {
        this.attributes = attributes;

        this.attributesById = new Map<AttributeId, Attribute>();
        attributes.forEach((attribute) => {
            this.attributesById.set(attribute.id, attribute);
        });
    }

    getById(id: AttributeId): Attribute | undefined {
        return this.attributesById.get(id);
    }

    getAll(): Attribute[] {
        return this.attributes;
    }
}