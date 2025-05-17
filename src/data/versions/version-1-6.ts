import { Version } from '@/models/version';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_6,
    name: 'Version 1.6',
    phases: [
        {
            channels: [
                {
                    name: 'Electric Reflection',
                    agents: [
                        {
                            agentId: AgentId.Soldier0Anby,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PulchraFellini,
                            isMain: false,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.BenBigger,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                },
                {
                    name: 'Born to Burn',
                    agents: [
                        {
                            agentId: AgentId.BurniceWhite,
                            isMain: true,
                            isNew: false,
                        },
                          {
                            agentId: AgentId.PulchraFellini,
                            isMain: false,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.BenBigger,
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
                    name: 'Sights of Asphodel',
                    agents: [
                        {
                            agentId: AgentId.Trigger,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.LucianaDeMontefio,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.BillyKid,
                            isMain: false,
                            isNew: false,
                        }
                    ]
                },
                {
                    name: 'Unswerving Bullet',
                    agents: [
                        {
                            agentId: AgentId.ZhuYuan,
                            isMain: true,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.LucianaDeMontefio,
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
        }
    ],
};

const version = new Version(data);

export default version;