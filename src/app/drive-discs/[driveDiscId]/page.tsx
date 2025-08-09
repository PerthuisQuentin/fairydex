import { Metadata } from 'next';

import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { driveDiscs, getDriveDiscIconUrl } from '@/drive-disc/data/drive-discs.data';
import DriveDisc from '@/drive-disc/pages/drive-disc.page';
import { enrichedTextToString } from '@/rpg-core/utils/enriched-text.utils';

type DriveDiscPageProps = {
    params: Promise<{ driveDiscId: DriveDiscId }>
};

export async function generateMetadata({ params }: DriveDiscPageProps): Promise<Metadata> {
    const { driveDiscId } = await params;
    
    const driveDisc = driveDiscs.getById(driveDiscId)!;

    const title = driveDisc.name;
    const description = `(2) ${enrichedTextToString(driveDisc.effects2PiecesDescription)} / (4) ${enrichedTextToString(driveDisc.effects4PiecesDescription)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
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