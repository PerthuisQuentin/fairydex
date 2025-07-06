import { AgentId } from '@/agent/data/agent.type';

export enum VersionId {
    Version_1_0 = '1.0',
    Version_1_1 = '1.1',
    Version_1_2 = '1.2',
    Version_1_3 = '1.3',
    Version_1_4 = '1.4',
    Version_1_5 = '1.5',
    Version_1_6 = '1.6',
    Version_1_7 = '1.7',
    Version_2_0 = '2.0',
}

export type ChannelAgent = {
    agentId: AgentId;
    isMain: boolean;
    isNew: boolean;
}

export type Channel = {
    name: string;
    agents: ChannelAgent[];
};

export type Phase = {
    channels: Channel[];
};

export type VersionData = {
    id: VersionId;
    name: string;
    phases: Phase[];
}