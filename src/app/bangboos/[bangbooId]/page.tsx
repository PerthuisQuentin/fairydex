import { Metadata } from 'next';

import Bangboo from '@/components/pages/bangboo.page';
import { BangbooId } from '@/data/bangboo.type';
import { bangboos, getBangbooIconUrl } from '@/data/bangboos.data';

type BangbooPageProps = {
    params: Promise<{ bangbooId: BangbooId }>
};

export async function generateMetadata({ params }: BangbooPageProps): Promise<Metadata> {
    const { bangbooId } = await params;
    const bangboo = bangboos.getById(bangbooId)!;

    return {
        openGraph: {
            title: bangboo.name,
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