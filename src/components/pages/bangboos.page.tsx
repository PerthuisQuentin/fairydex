import Link from 'next/link';

import bangboos from '@/data/bangboos.data';
import { Bangboo } from '@/models/bangboo';

import BangbooIcon from '../bangboo/bangboo-icon';
import BangbooRankIcon from '../rank/bangboo-rank-icon';

const getBangbooCard = (bangboo: Bangboo) => {
    return (
        <Link
            key={bangboo.id}
            href={`/bangboos/${bangboo.id}`}
            className="flex items-center p-4 m-4 border border-gray-200 transition-transform duration-150 hover:scale-105 hover:shadow-lg"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className='h-32 w-32 relative'>
                <BangbooIcon bangbooId={bangboo.id} />
            </div>
            <div className='ml-6'>
                <h2 className="text-xl font-bold">{bangboo.name}</h2>
                <div className="flex flex-row gap-2 items-center text-base">
                    <div className='h-8 w-8 relative'>
                        <BangbooRankIcon rank={bangboo.rank} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function Bangboos() {
    return (
        <div className="mx-auto max-w-4xl">
            {bangboos.getAll().map((bangboo) => getBangbooCard(bangboo))}
        </div>
    );
}