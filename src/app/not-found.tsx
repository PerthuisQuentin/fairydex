import Image from 'next/image';
import Link from 'next/link';

import { TextButton } from '@/common/components/ui/text-button.component';

export default function NotFound() {
    return (
        <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Hmm, you seem lost, proxy</h1>
            <div className="mb-8 rounded border-4 border-z-gray-2 bg-z-gray-2 w-full max-w-xs sm:max-w-md md:max-w-lg flex items-center justify-center">
                <Image
                    src="/anby-burger.webp"
                    alt="Anby Burger"
                    width={340}
                    height={340}
                    className="rounded shadow-lg w-full"
                />
            </div>
            <Link href="/">
                <TextButton className='w-52'>Go back home</TextButton>
            </Link>
        </div>
    );
}
