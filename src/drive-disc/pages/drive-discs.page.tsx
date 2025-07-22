import DriveDiscCard from '@/drive-disc/components/drive-disc-card.component';
import { driveDiscs } from '@/drive-disc/data/drive-discs.data';

export default function DriveDiscs() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center my-4">Drive Discs</h1>
            <div className="w-full max-w-6xl px-4">
                <div className="grid justify-center [grid-template-columns:repeat(auto-fit,minmax(180px,max-content))]">
                    {driveDiscs.getAll().map((driveDisc) => (
                        <div className="flex justify-center items-center" key={driveDisc.id}>
                            <DriveDiscCard driveDisc={driveDisc} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}