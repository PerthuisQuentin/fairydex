import { Metadata } from 'next';

import { AgentId } from '@/agent/data/agent.type';
import { getAgentIconUrl } from '@/agent/data/agents.data';
import Agents from '@/agent/pages/agents.page';

const title = 'Zenless Lab - Agent list';
const description = 'Browse all agents in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: getAgentIconUrl(AgentId.AnbyDemara),
                width: 128,
                height: 128,
            },
        ],
    }
};

export default Agents;