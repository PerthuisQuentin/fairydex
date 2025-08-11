import { Metadata } from 'next';

import AgentsByFactionPage from '@/agent/pages/agents-by-faction.page';

const title = 'FairyDex - Agent list by faction';
const description = 'Agent repartition by faction in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default AgentsByFactionPage;