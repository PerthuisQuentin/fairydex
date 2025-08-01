import { Metadata } from 'next';

import { BangbooId } from '@/bangboo/data/bangboo.type';
import { bangboos, getBangbooIconUrl } from '@/bangboo/data/bangboos.data';
import Bangboo from '@/bangboo/pages/bangboo.page';
import { factions } from '@/faction/data/factions.data';

type BangbooPageProps = {
    params: Promise<{ bangbooId: BangbooId }>
};

export async function generateMetadata({ params }: BangbooPageProps): Promise<Metadata> {
    const { bangbooId } = await params;

    const bangboo = bangboos.getById(bangbooId)!;

    const title = bangboo.name;
    let description = `${bangboo.rank}`;

    if (bangboo.factionId) {
        const faction = factions.getById(bangboo.factionId);
        description += ` - ${faction?.name}`;
    }

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `/bangboos/${bangbooId}`,
            images: [
                {
                    url: getBangbooIconUrl(bangbooId),
                    width: 128,
                    height: 128,
                },
            ],
        }
    };
}

export default async function AgentPage({ params }: BangbooPageProps) {
    const { bangbooId } = await params;

    return <Bangboo bangbooId={bangbooId} />;
}