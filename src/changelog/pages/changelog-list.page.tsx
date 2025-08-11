import { Roboto } from 'next/font/google';

import { changelog, ChangelogEntry } from '@/changelog/data/changelog.data';
import DottedCard from '@/common/components/ui/dotted-card.component';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['600', '700'],
});

function renderSection(label: string, items?: string[], colorClass?: string) {
    if (!items || items.length === 0) return null;
    return (
        <div className="mt-2">
            <span className={`font-semibold ${colorClass}`}>{label}:</span>
            <ul className="list-disc ml-6">
                {items.map((item) => <li key={`${label}-${item}`}>{item}</li>)}
            </ul>
        </div>
    );
}

function renderChangelogEntry(entry: ChangelogEntry) {
    return (
        <DottedCard key={entry.version} containerClass="mb-8" contentClass="p-4">
            <h2 className="text-xl font-bold">
                Version {entry.version} <span className="text-gray-500">({entry.date})</span>
            </h2>
            {renderSection('Added', entry.added, 'text-green-600')}
            {renderSection('Changed', entry.changed, 'text-blue-600')}
            {renderSection('Fixed', entry.fixed, 'text-yellow-600')}
            {renderSection('Removed', entry.removed, 'text-red-600')}
        </DottedCard>
    );
}

export function ChangelogPage() {
    return (
        <div className={`${roboto.className} max-w-2xl mx-auto py-8 px-4`}>
            <h1 className="text-3xl font-bold mb-2">Changelog</h1>
            <p className="text-zinc-400 mb-6 text-sm">
                Versions are milestones: changes can be deployed at any time, so not every update is tied to a version. This changelog highlights major steps, but improvements and fixes may be released continuously between versions.
            </p>
            {changelog.map((entry: ChangelogEntry) => renderChangelogEntry(entry))}
        </div>
    );
}
