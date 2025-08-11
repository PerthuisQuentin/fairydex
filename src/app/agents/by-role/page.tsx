import { Metadata } from 'next';

import AgentsByRolePage from '@/agent/pages/agents-by-role.page';

const title = 'FairyDex - Agent list by role';
const description = 'Agent repartition by attribute and specialization in Zenless Zone Zero';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default AgentsByRolePage;