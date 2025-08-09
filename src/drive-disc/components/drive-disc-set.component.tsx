import React from 'react';

import DriveDiscIcon from '@/drive-disc/components/drive-disc-icon.component';
import { DriveDiscId } from '@/drive-disc/data/drive-disc.type';

interface DriveDiscSetProps {
    readonly filledCount: number;
    readonly driveDiscId: DriveDiscId;
    readonly className?: string;
}

export default function DriveDiscSet({ filledCount, driveDiscId, className }: DriveDiscSetProps) {
    return (
        <div className={`flex flex-row gap-1 items-center ${className ?? ''}`}>
            {Array.from({ length: 6 }).map((_, i) => (
                <span
                    key={`circle-${filledCount}-${i}`}
                    className='w-6 h-6 rounded-full flex items-center justify-center bg-z-gray'
                >
                    {i < filledCount ? (
                        <DriveDiscIcon driveDiscId={driveDiscId} className="w-6 h-6" />
                    ) : null}
                </span>
            ))}
        </div>
    );
}
