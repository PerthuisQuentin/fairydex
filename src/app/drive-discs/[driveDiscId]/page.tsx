import { Metadata } from 'next';

import DriveDisc from '@/components/pages/drive-disc.page';
import { DriveDiscId } from '@/data/drive-disc.type';
import { driveDiscs, getDriveDiscIconUrl } from '@/data/drive-discs.data';

type DriveDiscPageProps = {
    params: Promise<{ driveDiscId: DriveDiscId }>
};

export async function generateMetadata({ params }: DriveDiscPageProps): Promise<Metadata> {
    const { driveDiscId } = await params;
    const driveDisc = driveDiscs.getById(driveDiscId)!;

    return {
        openGraph: {
            title: driveDisc.name,
            url: `/bangboos/${driveDiscId}`,
            images: [
                {
                    url: getDriveDiscIconUrl(driveDiscId),
                    width: 128,
                    height: 128,
                },
            ],
        }
    };
}

export default async function DriveDiscPage({ params }: DriveDiscPageProps) {
    const { driveDiscId } = await params;

    return <DriveDisc driveDiscId={driveDiscId} />;
}