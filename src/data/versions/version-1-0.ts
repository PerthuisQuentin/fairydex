import { Version } from '@/models/version/version.model';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_0,
    name: 'Version 1.0',
    phases: [
        {
            channels: [
                {
                    name: 'Mellow Waveride',
                    agents: [
                        {
                            agentId: AgentId.EllenJoe,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.AntonIvanov,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.Soukaku,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                }
            ]
        },
        {
            channels: [
                {
                    name: 'Unswerving Bullet',
                    agents: [
                        {
                            agentId: AgentId.ZhuYuan,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.BenBigger,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.NicoleDemara,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                }
            ]
        }
    ],
};

const version = new Version(data);

export default version;