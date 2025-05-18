import { Version } from '@/models/version';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_2,
    name: 'Version 1.2',
    phases: [
        {
            channels: [
                {
                    name: 'Ember-Crowned Overlord',
                    agents: [
                        {
                            agentId: AgentId.CaesarKing,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.AntonIvanov,
                            isMain: false,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.PiperWheel,
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
                    name: 'Born to Burn',
                    agents: [
                        {
                            agentId: AgentId.BurniceWhite,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.LucianaDeMontefio,
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