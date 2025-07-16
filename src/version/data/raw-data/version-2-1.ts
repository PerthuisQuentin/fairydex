import { AgentId } from '@/agent/data/agent.type';
import { VersionData, VersionId } from '@/version/data/version.type';
import { Version } from '@/version/models/version.model';

const data: VersionData = {
    id: VersionId.Version_2_1,
    name: 'Version 2.1',
    phases: [
        {
            channels: [
                {
                    name: 'Whispered Tales',
                    agents: [
                        {
                            agentId: AgentId.UkinamiYuzuha,
                            isMain: true,
                            isNew: true,
                        },
                        {
                            agentId: AgentId.PiperWheel,
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
                    name: 'Honed Blade of Reflection',
                    agents: [
                        {
                            agentId: AgentId.HoshimiMiyabi,
                            isMain: true,
                            isNew: false,
                        },
                        {
                            agentId: AgentId.PiperWheel,
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
    ]
};

const version = new Version(data);

export default version;