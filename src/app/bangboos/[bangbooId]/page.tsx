import Bangboo from '@/components/pages/bangboo.page';
import { BangbooId } from '@/data/bangboo.type';

type BangbooPageProps = {
    params: Promise<{ bangbooId: BangbooId }>
};

export default async function AgentPage({ params }: BangbooPageProps) {
    const { bangbooId } = await params;

    return <Bangboo bangbooId={bangbooId} />;
}