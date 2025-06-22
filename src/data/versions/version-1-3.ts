import { Version } from '@/models/version/version.model';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_3,
    name: 'Version 1.3',
    phases: [
        {
            channels: [
                {
                    name: 'Moonlit Serenity',
                    agents: [
                        {
                            agentId: AgentId.TsukishiroYanagi,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.AnbyDemara,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.BillyKid,
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
                    name: 'Champion of Embers',
                    agents: [
                        {
                            agentId: AgentId.Lighter,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.BenBigger,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.CorinWickes,
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