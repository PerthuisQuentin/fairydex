import { Metadata } from 'next';

import { specialities } from '@/speciality/data/specialities.data';
import { WEngineId } from '@/w-engine/data/w-engine.type';
import { getWEngineIconUrl, wEngines } from '@/w-engine/data/w-engines.data';
import WEngine from '@/w-engine/pages/w-engine.page';

type WEnginePageProps = {
    params: Promise<{ wEngineId: WEngineId }>
};

export async function generateMetadata({ params }: WEnginePageProps): Promise<Metadata> {
    const { wEngineId } = await params;

    const wEngine = wEngines.getById(wEngineId)!;
    const speciality = specialities.getById(wEngine.specialityId);

    const title = wEngine.name;
    const description = `${wEngine.rank} - ${speciality?.name}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
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