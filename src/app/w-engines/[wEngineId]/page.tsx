import WEngine from '@/components/pages/w-engine.page';
import { WEngineId } from '@/data/w-engine.type';

type WEnginePageProps = {
    params: Promise<{ wEngineId: WEngineId }>
};

export default async function AgentPage({ params }: WEnginePageProps) {
    const { wEngineId } = await params;

    return <WEngine wEngineId={wEngineId} />;
}