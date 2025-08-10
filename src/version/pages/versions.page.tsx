import VersionCard from '@/version/components/version-card.component';
import { versions } from '@/version/data/versions.data';

export default function Versions() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center my-4">Versions</h1>
            <div className="w-full max-w-6xl px-4">
                <div className="flex flex-col gap-4">
                    {versions.getAll().reverse().map((version) => (
                        <div className="flex justify-center items-center" key={version.id}>
                            <VersionCard version={version} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}