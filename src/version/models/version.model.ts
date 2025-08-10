import { Phase, VersionData, VersionId } from '@/version/data/version.type';

export class Version {
    public readonly id: VersionId;
    public readonly name: string;
    public readonly phases: Phase[];

    constructor(versionData: VersionData) {
        this.id = versionData.id;
        this.name = versionData.name;
        this.phases = versionData.phases;
    }
}