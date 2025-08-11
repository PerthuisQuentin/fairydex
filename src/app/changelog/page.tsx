import { Metadata } from 'next';

import { ChangelogPage } from '@/changelog/pages/changelog-list.page';

const title = 'FairyDex - Changelog';
const description = 'Changelog of the FairyDex project, tracking updates and changes made to the application';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description
    }
};

export default ChangelogPage;