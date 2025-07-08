import { AgentId } from '@/agent/data/agent.type';
import { VersionData, VersionId } from '@/version/data/version.type';
import { Version } from '@/version/models/version.model';

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
                {
            channels: [
                {
                    name: 'Fu-rocious Feline',
                    agents: [
                        {
                            agentId: AgentId.JuFufu,
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
                },
                {
                    name: 'Ember-Crowned Overlord',
                    agents: [
                        {
                            agentId: AgentId.CaesarKing,
                            isMain: true,
                            isNew: false,
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
        },
    ]
};

const version = new Version(data);

export default version;