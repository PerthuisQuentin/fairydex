import BangbooCard from '@/bangboo/components/bangboo-card.component';
import { bangboos } from '@/bangboo/data/bangboos.data';

export default function Bangboos() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center my-4">Bangboos</h1>
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