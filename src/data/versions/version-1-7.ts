import { Version } from '@/models/version';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_7,
    name: 'Version 1.7',
    phases: [
        {
            channels: [
                {
                    name: 'Soar Into the Gentle Night',
                    agents: [
                        {
                            agentId: AgentId.VivianBanshee,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PiperWheel,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.SethLowell,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                },
                {
                    name: '[No Match Found]',
                    agents: [
                        {
                            agentId: AgentId.JaneDoe,
                            isMain: true,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.PiperWheel,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.SethLowell,
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
                    name: 'As Yesterday Dies',
                    agents: [
                        {
                            agentId: AgentId.HugoVlad,
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
                },
                {
                    name: 'Champion of Embers',
                    agents: [
                        {
                            agentId: AgentId.Lighter,
                            isMain: true,
                            isNew: false,
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
        }
    ],
};

const version = new Version(data);

export default version;