import Image from 'next/image';

import { PowerButton } from '../ui/round-button/round-button';

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-full flex items-center justify-center">
                <Image
                    src="/test.jpg"
                    alt="Hero Image"
                    width={1500}
                    height={256}
                    className=""
                />
                <PowerButton className="absolute left-55 bottom-10" />
            </div>
        </main>
    );
}
