import Link from 'next/link';

import driveDiscs from '@/data/drive-discs.data';
import { DriveDisc } from '@/models/drive-disc';

import DriveDiscIcon from '../drive-disc/attribute-icon';

const getDriveDiscCard = (driveDisc: DriveDisc) => {
    return (
        <Link
            key={driveDisc.id}
            href={`/drive-discs/${driveDisc.id}`}
            className="flex items-center p-4 m-4 border border-gray-200 transition-transform duration-150 hover:scale-105 hover:shadow-lg"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className='h-24 w-24 relative'>
                <DriveDiscIcon driveDiscId={driveDisc.id} />
            </div>
            <div className='ml-6'>
                <h2 className="text-xl font-bold">{driveDisc.name}</h2>
            </div>
        </Link>
    );
};

export default function DriveDiscs() {
    return (
        <div className="mx-auto max-w-4xl">
            {driveDiscs.getAll().map((driveDisc) => getDriveDiscCard(driveDisc))}
        </div>
    );
}