import { AgentId } from '@/agent/data/agent.type';
import { VersionData, VersionId } from '@/version/data/version.type';
import { Version } from '@/version/models/version.model';

const data: VersionData = {
    id: VersionId.Version_1_1,
    name: 'Version 1.1',
    phases: [
        {
            channels: [
                {
                    name: 'Untainted Jade',
                    agents: [
                        {
                            agentId: AgentId.Qingyi,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.BillyKid,
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
                    name: '[No Match Found]',
                    agents: [
                        {
                            agentId: AgentId.JaneDoe,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.SethLowell,
                            isMain: false,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.AnbyDemara,
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