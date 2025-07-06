import { Metadata } from 'next';

import { WEngineId } from '@/w-engine/data/w-engine.type';
import { getWEngineIconUrl, wEngines } from '@/w-engine/data/w-engines.data';
import WEngine from '@/w-engine/pages/w-engine.page';

type WEnginePageProps = {
    params: Promise<{ wEngineId: WEngineId }>
};

export async function generateMetadata({ params }: WEnginePageProps): Promise<Metadata> {
    const { wEngineId } = await params;
    const wEngine = wEngines.getById(wEngineId)!;

    return {
        openGraph: {
            title: wEngine.name,
            url: `/w-engines/${wEngineId}`,
            images: [
                {
                    url: getWEngineIconUrl(wEngineId),
                    width: 128,
                    height: 128,
                },
            ],
        }
    };
}


export default async function AgentPage({ params }: WEnginePageProps) {
    const { wEngineId } = await params;

    return <WEngine wEngineId={wEngineId} />;
}