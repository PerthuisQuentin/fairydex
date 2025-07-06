import { VersionId } from '@/version/data/version.type';

import { Version } from './version.model';

export class Versions {
    private readonly versions: Version[];
    private readonly versionsById: Map<VersionId, Version>;

    constructor(versions: Version[]) {
        this.versions = versions;

        this.versionsById = new Map<VersionId, Version>();
        versions.forEach((version) => {
            this.versionsById.set(version.id, version);
        });
    }

    getById(id: VersionId): Version | undefined {
        return this.versionsById.get(id);
    }

    getAll(): Version[] {
        return this.versions;
    }
}