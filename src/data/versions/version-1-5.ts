import { Version } from '@/models/version/version.model';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_5,
    name: 'Version 1.5',
    phases: [
        {
            channels: [
                {
                    name: 'Thousand Melodies',
                    agents: [
                        {
                            agentId: AgentId.AstraYao,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.AnbyDemara,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.CorinWickes,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                },
                {
                    name: 'Mellow Waveride',
                    agents: [
                        {
                            agentId: AgentId.EllenJoe,
                            isMain: true,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.AnbyDemara,
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
        },
        {
            channels: [
                {
                    name: 'Web of Light and Shadow',
                    agents: [
                        {
                            agentId: AgentId.EvelynChevalier,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.AntonIvanov,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.NicoleDemara,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                },
                {
                    name: 'Untainted Jade',
                    agents: [
                        {
                            agentId: AgentId.Qingyi,
                            isMain: true,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.AntonIvanov,
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