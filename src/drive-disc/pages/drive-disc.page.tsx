import classNames from 'classnames';
import { Roboto } from 'next/font/google';

import DottedCard from '@/common/components/ui/dotted-card.component';
import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';
import { driveDiscs } from '@/drive-disc/data/drive-discs.data';

const roboto = Roboto({
    subsets: ['latin'],
});

type DriveDiscProps = {
    readonly driveDiscId: DriveDiscId
};

export default function DriveDisc({ driveDiscId }: DriveDiscProps) {
    const driveDisc = driveDiscs.getById(driveDiscId)!;

    const getEffectBlock = (title: string, description: string) => (
        <div className="w-full rounded bg-z-gray-2 p-3">
            <h2 className="font-bold text-lg mb-1">{title}</h2>
            <div className="text-sm whitespace-pre-line">{description}</div>
        </div>
    );

    return (
        <div className="mx-auto max-w-4xl flex flex-col items-center mt-2 px-8">
            <DottedCard containerClass="w-full sm:w-[500px] md:w-[700px]" contentClass="p-4 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">{driveDisc.name}</h1>
                <div className="flex flex-col sm:flex-row w-full gap-4 items-center justify-center">
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <DriveDiscIcon driveDiscId={driveDisc.id} className="py-2" />
                    </div>
                    <div className={classNames('flex flex-col flex-grow gap-2', roboto.className)}>
                        {getEffectBlock('2-piece bonus', driveDisc.effects2PiecesDescription)}
                        {getEffectBlock('4-piece bonus', driveDisc.effects4PiecesDescription)}
                    </div>
                </div>
            </DottedCard>
        </div>
    );
}