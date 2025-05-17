import { Version } from '@/models/version';

import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_2_0,
    name: 'Version 2.0',
    phases: []
};

const version = new Version(data);

export default version;