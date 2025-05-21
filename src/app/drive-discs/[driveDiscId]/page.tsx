import DriveDisc from '@/components/pages/drive-disc.page';
import { DriveDiscId } from '@/data/drive-disc.type';

type DriveDiscPageProps = {
    params: Promise<{ driveDiscId: DriveDiscId }>
};

export default async function DriveDiscPage({ params }: DriveDiscPageProps) {
    const { driveDiscId } = await params;

    return <DriveDisc driveDiscId={driveDiscId} />;
}