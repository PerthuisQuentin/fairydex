import { Metadata } from 'next';

import Agents from '@/agent/pages/agents.page';

const title = 'FairyDex - Agent list';
const description = 'Browse all agents in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default Agents;