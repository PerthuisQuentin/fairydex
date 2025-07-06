import { AttributeData, AttributeFamilyId, AttributeId } from '@/attribute/data/attribute.type';

export class Attribute {
    public readonly id: AttributeId;
    public readonly familyId: AttributeFamilyId;
    public readonly name: string;

    constructor(attributeData: AttributeData) {
        this.id = attributeData.id;
        this.familyId = attributeData.familyId;
        this.name = attributeData.name;
    }
}