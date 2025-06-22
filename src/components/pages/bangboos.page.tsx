import { bangboos } from '@/data/bangboos.data';

import BangbooCard from '../bangboo/bangboo-card';

export default function Bangboos() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl px-4">
                <div className="grid justify-center [grid-template-columns:repeat(auto-fit,minmax(180px,max-content))]">
                    {bangboos.getAll().map((bangboo) => (
                        <div className="flex justify-center items-center" key={bangboo.id}>
                            <BangbooCard bangboo={bangboo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}