import { Version } from '@/models/version/version.model';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_2_0,
    name: 'Version 2.0',
    phases: [
        {
            channels: [
                {
                    name: 'Lonely Wayfarer Beyond',
                    agents: [
                        {
                            agentId: AgentId.YiXuan,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PanYinhu,
                            isMain: false,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PulchraFellini,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                },
                {
                    name: 'Thousand Melodies',
                    agents: [
                        {
                            agentId: AgentId.AstraYao,
                            isMain: true,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.PanYinhu,
                            isMain: false,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PulchraFellini,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                }
            ]
        },
    ]
};

const version = new Version(data);

export default version;