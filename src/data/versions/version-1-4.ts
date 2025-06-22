import { Version } from '@/models/version/version.model';

import { AgentId } from '../agent.type';
import { VersionData, VersionId } from '../version.type';

const data: VersionData = {
    id: VersionId.Version_1_4,
    name: 'Version 1.4',
    phases: [
        {
            channels: [
                {
                    name: 'Honed Blade of Reflection',
                    agents: [
                        {
                            agentId: AgentId.HoshimiMiyabi,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PiperWheel,
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
                    name: 'Per Aspera',
                    agents: [
                        {
                            agentId: AgentId.AsabaHarumasa,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.LucianaDeMontefio,
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
    ],
};

const version = new Version(data);

export default version;