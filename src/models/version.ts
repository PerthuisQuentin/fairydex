import { VersionData, VersionId } from '@/data/version.type';

export class Version {
    public readonly id: VersionId;
    public readonly name: string;

    constructor(versionData: VersionData) {
        this.id = versionData.id;
        this.name = versionData.name;
    }
}