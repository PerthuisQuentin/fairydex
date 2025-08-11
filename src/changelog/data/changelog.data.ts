export type ChangelogEntry = {
    version: string;
    date: string;
    added?: string[];
    changed?: string[];
    fixed?: string[];
    removed?: string[];
};

export const changelog: ChangelogEntry[] = [
    {
        version: '1.0.0',
        date: '2025-08-11',
        added: [
            'Agent list',
            'Agent list by role',
            'Agent list by faction',
            'Simple agent page',
            'W-Engine list',
            'Simple W-Engine page',
            'Bangboo list',
            'Simple Bangboo page',
            'Drive disc list',
            'Drive disc page with enriched description for effects',
            'Simple Version list',
            'About page',
            'Changelog page',
            'Basic SEO'
        ],
    },
];
